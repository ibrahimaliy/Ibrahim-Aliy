"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

interface CvModalContextType {
  isOpen: boolean;
  openCv: () => void;
  closeCv: () => void;
  toggleCv: () => void;
}

const CvModalContext = createContext<CvModalContextType>({
  isOpen: false,
  openCv: () => {},
  closeCv: () => {},
  toggleCv: () => {},
});

export function CvModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openCv = useCallback(() => setIsOpen(true), []);
  const closeCv = useCallback(() => setIsOpen(false), []);
  const toggleCv = useCallback(() => setIsOpen((prev) => !prev), []);

  useEffect(() => {
    // Check if URL contains #cv, #preview-cv, or ?cv on mount or hashchange
    const checkUrl = () => {
      if (typeof window !== "undefined") {
        const hash = window.location.hash;
        const search = window.location.search;
        if (
          hash === "#cv" ||
          hash === "#preview-cv" ||
          hash === "#resume" ||
          search.includes("cv") ||
          search.includes("resume")
        ) {
          setIsOpen(true);
        }
      }
    };

    checkUrl();
    window.addEventListener("hashchange", checkUrl);

    const handleCustomOpen = () => setIsOpen(true);
    window.addEventListener("open-cv-modal", handleCustomOpen);

    return () => {
      window.removeEventListener("hashchange", checkUrl);
      window.removeEventListener("open-cv-modal", handleCustomOpen);
    };
  }, []);

  return (
    <CvModalContext.Provider value={{ isOpen, openCv, closeCv, toggleCv }}>
      {children}
    </CvModalContext.Provider>
  );
}

export function useCvModal() {
  return useContext(CvModalContext);
}
