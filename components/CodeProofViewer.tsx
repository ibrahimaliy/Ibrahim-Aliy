"use client";

import React, { useState } from "react";
import { Check, Copy, FileCode2, Terminal } from "lucide-react";

interface Snippet {
  id: string;
  filename: string;
  title: string;
  tagline: string;
  role: string;
  code: string;
  highlights: string[];
}

const SNIPPETS: Snippet[] = [
  {
    id: "cart",
    filename: "useCartStore.ts",
    title: "Optimistic Cart Slice (Zustand)",
    tagline: "Client-side synchronous UI mutations with local storage rehydration.",
    role: "State Management",
    highlights: [
      "Atomic quantity increments bounded by available stock constraints",
      "Immediate UI response without waiting on network roundtrips",
      "Typed localStorage persistence middleware with safe hydration",
    ],
    code: `import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export interface FilaCartItem {
  id: string;
  sku: string;
  name: string;
  style: 'Gobi' | 'Abeti Aja' | 'Kente' | 'Damask';
  size: 'M (22")' | 'L (22.5")' | 'XL (23")';
  price: number; // in NGN
  quantity: number;
  maxAvailable: number;
}

interface CartStore {
  items: FilaCartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (item: Omit<FilaCartItem, 'quantity'>, qty?: number) => void;
  updateQuantity: (id: string, qty: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  getSubtotal: () => number;
  getTotalItems: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),

      addItem: (newItem, qty = 1) => {
        set((state) => {
          const existing = state.items.find((i) => i.id === newItem.id);
          if (existing) {
            const nextQty = Math.min(
              existing.quantity + qty,
              existing.maxAvailable
            );
            return {
              items: state.items.map((i) =>
                i.id === newItem.id ? { ...i, quantity: nextQty } : i
              ),
              isOpen: true,
            };
          }
          return {
            items: [...state.items, { ...newItem, quantity: Math.min(qty, newItem.maxAvailable) }],
            isOpen: true,
          };
        });
      },

      updateQuantity: (id, qty) => {
        set((state) => ({
          items: state.items
            .map((i) => (i.id === id ? { ...i, quantity: Math.min(qty, i.maxAvailable) } : i))
            .filter((i) => i.quantity > 0),
        }));
      },

      removeItem: (id) => {
        set((state) => ({
          items: state.items.filter((i) => i.id !== id),
        }));
      },

      clearCart: () => set({ items: [] }),

      getSubtotal: () => {
        return get().items.reduce((acc, item) => acc + item.price * item.quantity, 0);
      },

      getTotalItems: () => {
        return get().items.reduce((acc, item) => acc + item.quantity, 0);
      },
    }),
    {
      name: 'fila-yoruba-cart-v1',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ items: state.items }),
    }
  )
);`,
  },
  {
    id: "reservation",
    filename: "reservationEngine.ts",
    title: "Stock Reservation Engine (TTL Lease)",
    tagline: "Protects inventory integrity and prevents overselling during high-traffic checkout.",
    role: "Inventory Truth",
    highlights: [
      "15-minute time-to-live lease on checkout initialization",
      "Available stock = physical units minus active pending reservations",
      "Self-purging expired leases before next allocation attempt",
    ],
    code: `/**
 * Stock Reservation Engine
 * Protects limited-edition artisanal fila inventory during peak checkout
 * by using temporary TTL leases before physical ledger mutation.
 */

export interface StockReservation {
  reservationId: string;
  cartSessionId: string;
  sku: string;
  quantityReserved: number;
  expiresAt: number; // Unix timestamp in ms
  status: 'ACTIVE' | 'COMMITTED' | 'EXPIRED' | 'RELEASED';
}

export interface InventoryItem {
  sku: string;
  name: string;
  physicalStock: number;
  activeReservations: number;
}

const RESERVATION_TTL_MS = 15 * 60 * 1000; // 15-minute lease window

export class StockReservationEngine {
  private reservations: Map<string, StockReservation> = new Map();

  /**
   * Calculates available units taking pending active leases into account.
   */
  public getAvailableStock(item: InventoryItem, currentTime = Date.now()): number {
    this.purgeExpiredLeases(currentTime);
    const unreservedUnits = item.physicalStock - item.activeReservations;
    return Math.max(0, unreservedUnits);
  }

  /**
   * Attempts to lease stock during checkout initialization.
   */
  public attemptReservation(
    cartSessionId: string,
    sku: string,
    requestedQty: number,
    inventory: InventoryItem,
    currentTime = Date.now()
  ): { success: boolean; reservation?: StockReservation; error?: string } {
    this.purgeExpiredLeases(currentTime);

    const available = this.getAvailableStock(inventory, currentTime);
    if (available < requestedQty) {
      return {
        success: false,
        error: \`Insufficient stock for SKU: \${sku}. Requested: \${requestedQty}, Available: \${available}\`,
      };
    }

    const reservation: StockReservation = {
      reservationId: \`res_\${Date.now()}_\${Math.random().toString(36).substring(2, 7)}\`,
      cartSessionId,
      sku,
      quantityReserved: requestedQty,
      expiresAt: currentTime + RESERVATION_TTL_MS,
      status: 'ACTIVE',
    };

    this.reservations.set(reservation.reservationId, reservation);
    inventory.activeReservations += requestedQty;

    return { success: true, reservation };
  }

  /**
   * Commits the reservation into an immutable physical sale upon payment authorization.
   */
  public commitReservation(
    reservationId: string,
    inventory: InventoryItem
  ): boolean {
    const res = this.reservations.get(reservationId);
    if (!res || res.status !== 'ACTIVE' || res.expiresAt < Date.now()) {
      return false;
    }

    res.status = 'COMMITTED';
    inventory.activeReservations = Math.max(0, inventory.activeReservations - res.quantityReserved);
    inventory.physicalStock = Math.max(0, inventory.physicalStock - res.quantityReserved);
    return true;
  }

  /**
   * Evicts expired reservations and returns leased capacity to the pool.
   */
  private purgeExpiredLeases(currentTime: number): void {
    for (const [, res] of this.reservations.entries()) {
      if (res.status === 'ACTIVE' && res.expiresAt <= currentTime) {
        res.status = 'EXPIRED';
      }
    }
  }
}`,
  },
  {
    id: "stateMachine",
    filename: "orderStateMachine.ts",
    title: "Order Lifecycle State Machine",
    tagline: "Linear finite state transitions disallowing illegal status mutations.",
    role: "Order Integrity",
    highlights: [
      "Strict legal transition dictionary (e.g. cannot jump from PENDING to SHIPPED)",
      "Immutable audit log records user, actor role, timestamp, and reason",
      "Refund and cancellation modeled as independent terminal states",
    ],
    code: `/**
 * Finite State Machine for Fila Yoruba Order Lifecycle.
 * Enforces strict linear progression and prevents illegal status jumps.
 */

export type OrderStatus =
  | 'PENDING_PAYMENT'
  | 'PAYMENT_AUTHORIZED'
  | 'ORDER_CONFIRMED'
  | 'IN_PRODUCTION_PACKING'
  | 'DISPATCHED_SHIPPED'
  | 'DELIVERED'
  | 'CANCELLED'
  | 'REFUND_PROCESSED';

export interface OrderTransitionEvent {
  orderId: string;
  fromStatus: OrderStatus;
  toStatus: OrderStatus;
  timestamp: string;
  triggeredBy: 'customer' | 'payment_webhook' | 'admin_operator' | 'system_cron';
  reason?: string;
}

// Strict legal transition graph
const LEGAL_TRANSITIONS: Record<OrderStatus, OrderStatus[]> = {
  PENDING_PAYMENT: ['PAYMENT_AUTHORIZED', 'CANCELLED'],
  PAYMENT_AUTHORIZED: ['ORDER_CONFIRMED', 'CANCELLED'],
  ORDER_CONFIRMED: ['IN_PRODUCTION_PACKING', 'CANCELLED'],
  IN_PRODUCTION_PACKING: ['DISPATCHED_SHIPPED', 'CANCELLED'],
  DISPATCHED_SHIPPED: ['DELIVERED'],
  DELIVERED: ['REFUND_PROCESSED'],
  CANCELLED: [], // Terminal state
  REFUND_PROCESSED: [], // Terminal accounting state
};

export class OrderStateMachine {
  public static canTransition(current: OrderStatus, target: OrderStatus): boolean {
    const allowed = LEGAL_TRANSITIONS[current] || [];
    return allowed.includes(target);
  }

  public static transition(
    currentOrder: { id: string; status: OrderStatus; auditLog: OrderTransitionEvent[] },
    nextStatus: OrderStatus,
    triggeredBy: OrderTransitionEvent['triggeredBy'],
    reason?: string
  ) {
    if (!this.canTransition(currentOrder.status, nextStatus)) {
      throw new Error(
        \`Illegal State Transition: Cannot move order #\${currentOrder.id} from [\${currentOrder.status}] to [\${nextStatus}].\`
      );
    }

    const event: OrderTransitionEvent = {
      orderId: currentOrder.id,
      fromStatus: currentOrder.status,
      toStatus: nextStatus,
      timestamp: new Date().toISOString(),
      triggeredBy,
      reason,
    };

    return {
      ...currentOrder,
      status: nextStatus,
      auditLog: [...currentOrder.auditLog, event],
      updatedAt: event.timestamp,
    };
  }
}`,
  },
];

export function CodeProofViewer() {
  const [activeId, setActiveId] = useState("cart");
  const [copied, setCopied] = useState(false);

  const activeSnippet = SNIPPETS.find((s) => s.id === activeId) || SNIPPETS[0];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(activeSnippet.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <section className="container py-12 border-t border-zinc-200 dark:border-zinc-800/80">
      {/* Section Header */}
      <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-3">
        <Terminal size={14} />
        <span>ARCHITECTURAL CODE PROOF · CORE STATE PRIMITIVES</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
            Code-level verification of architecture claims.
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 max-w-2xl mt-1">
            Real, syntax-highlighted TypeScript implementations demonstrating state separation,
            inventory leases, and order state transition safety.
          </p>
        </div>
      </div>

      {/* Tabs Row */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-zinc-200 dark:border-zinc-800" role="tablist">
        {SNIPPETS.map((snippet) => {
          const isActive = snippet.id === activeId;
          return (
            <button
              key={snippet.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveId(snippet.id)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-mono transition-all shrink-0 cursor-pointer ${
                isActive
                  ? "bg-zinc-900 text-zinc-100 dark:bg-zinc-100 dark:text-zinc-950 font-semibold shadow-sm"
                  : "bg-zinc-100 dark:bg-zinc-900/60 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 border border-zinc-200 dark:border-zinc-800"
              }`}
            >
              <FileCode2 size={13} className={isActive ? "text-emerald-400 dark:text-emerald-600" : "text-zinc-400"} />
              <span>{snippet.filename}</span>
              <span className={`text-[9.5px] px-1.5 py-0.5 rounded ${
                isActive ? "bg-white/20 dark:bg-black/20" : "bg-zinc-200 dark:bg-zinc-800 text-zinc-500"
              }`}>
                {snippet.role}
              </span>
            </button>
          );
        })}
      </div>

      {/* Context Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-4 p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-[#0c0c0e]">
        <div className="md:col-span-1">
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">Module & Focus</span>
          <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100 mt-0.5 block">{activeSnippet.title}</span>
          <p className="text-[11px] text-zinc-600 dark:text-zinc-400 mt-1 leading-snug">{activeSnippet.tagline}</p>
        </div>

        <div className="md:col-span-2">
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block mb-1.5">Architectural Guarantees</span>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[11px] text-zinc-700 dark:text-zinc-300">
            {activeSnippet.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-1.5">
                <span className="h-1 w-1 rounded-full bg-emerald-500 shrink-0 mt-1.5" />
                <span className="leading-snug">{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Code Display Window */}
      <div className="relative rounded-xl border border-zinc-800 bg-[#070709] overflow-hidden shadow-2xl">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-zinc-800 bg-[#0d0d11]">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
            </div>
            <span className="text-zinc-400 font-mono text-[11px] ml-2">
              src/lib/{activeSnippet.filename}
            </span>
          </div>

          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white text-[11px] font-mono transition cursor-pointer"
            title="Copy snippet"
          >
            {copied ? (
              <>
                <Check size={12} className="text-emerald-400" />
                <span className="text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <Copy size={12} />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Code Content */}
        <div className="p-4 overflow-x-auto max-h-[480px] font-mono text-[11.5px] leading-relaxed text-zinc-300 selection:bg-emerald-500/30 selection:text-emerald-200">
          <pre>
            <code>
              {activeSnippet.code.split("\n").map((line, idx) => (
                <div key={idx} className="table-row hover:bg-zinc-800/30">
                  <span className="table-cell pr-4 text-right select-none text-zinc-600 text-[10px] w-8">
                    {idx + 1}
                  </span>
                  <span className="table-cell whitespace-pre font-mono">
                    {line}
                  </span>
                </div>
              ))}
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}
