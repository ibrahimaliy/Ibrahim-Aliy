"use client";

import React from "react";

export function CvDocumentView() {
  return (
    <div className="w-full max-w-[850px] mx-auto bg-white text-zinc-900 shadow-lg border border-zinc-200/80 rounded-xl p-6 sm:p-9 md:p-11 font-sans text-[13px] sm:text-[13.5px] leading-relaxed select-text">
      {/* Header */}
      <header className="text-center mb-6 border-b border-zinc-200/60 pb-5">
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-black mb-2 uppercase">
          IBRAHIM ALIY
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs text-zinc-700">
          <span>Nigeria</span>
          <span className="text-zinc-400">|</span>
          <a
            href="tel:+2348103628977"
            className="hover:text-blue-600 hover:underline transition"
          >
            +234 810 362 8977
          </a>
          <span className="text-zinc-400">|</span>
          <a
            href="mailto:ibrahimaliy1907@gmail.com"
            className="hover:text-blue-600 hover:underline transition"
          >
            ibrahimaliy1907@gmail.com
          </a>
          <span className="text-zinc-400">|</span>
          <a
            href="https://github.com/ibrahimaliy"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-600 hover:underline transition"
          >
            github.com/ibrahimaliy
          </a>
          <span className="text-zinc-400">|</span>
          <a
            href="https://ibrahim-aliy.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-600 hover:underline transition font-medium"
          >
            https://ibrahim-aliy.vercel.app
          </a>
        </div>
      </header>

      {/* Professional Summary */}
      <section className="mb-5">
        <h2 className="text-xs sm:text-[13px] font-bold text-black uppercase tracking-wider pb-1 border-b-[1.8px] border-blue-700 mb-2.5">
          PROFESSIONAL SUMMARY
        </h2>
        <p className="text-zinc-800 leading-normal text-justify text-xs sm:text-[12.8px]">
          Frontend Developer with hands-on experience building responsive,
          production-grade web applications using React.js, Next.js, TypeScript,
          and Tailwind CSS, currently contributing to production interfaces and
          admin systems as a Frontend Developer Intern at Outcess Solutions. Built
          and shipped a complete e-commerce platform spanning a customer
          storefront and an admin back-office, plus a role-based attendance
          management system, reflecting end-to-end ownership from state
          management to API integration. Complements this with a multi-year
          background in networking and IT support (CCNA-certified), bringing a
          practical, troubleshooting-first approach to debugging and
          problem-solving. Currently completing a B.Tech in Telecommunications
          Engineering.
        </p>
      </section>

      {/* Technical Skills */}
      <section className="mb-5">
        <h2 className="text-xs sm:text-[13px] font-bold text-black uppercase tracking-wider pb-1 border-b-[1.8px] border-blue-700 mb-2.5">
          TECHNICAL SKILLS
        </h2>
        <div className="space-y-1 text-xs sm:text-[12.8px] text-zinc-800">
          <div>
            <strong className="text-black">Frontend:</strong> React.js, Next.js,
            TypeScript, JavaScript (ES6+), Tailwind CSS, HTML5, CSS3, Responsive
            Design
          </div>
          <div>
            <strong className="text-black">State &amp; Data:</strong> Zustand,
            TanStack React Query, REST API Integration
          </div>
          <div>
            <strong className="text-black">Tools:</strong> Git, GitHub, VS Code,
            Figma, npm
          </div>
          <div>
            <strong className="text-black">Networking &amp; IT:</strong> LAN/WAN
            Setup, Cisco Networking, Technical Support, Network Troubleshooting
          </div>
          <div>
            <strong className="text-black">Core Strengths:</strong> Problem
            Solving, Team Collaboration, Adaptability, Communication, Time
            Management
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="mb-5">
        <h2 className="text-xs sm:text-[13px] font-bold text-black uppercase tracking-wider pb-1 border-b-[1.8px] border-blue-700 mb-2.5">
          PROFESSIONAL EXPERIENCE
        </h2>

        {/* Outcess */}
        <div className="mb-3.5">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs sm:text-[13px] mb-1">
            <div>
              <span className="font-bold text-black">
                Frontend Developer Intern
              </span>{" "}
              <span className="text-zinc-500 font-light">|</span>{" "}
              <span className="italic text-zinc-700">Outcess Solutions</span>
            </div>
            <span className="text-xs text-zinc-600 font-medium">
              May 2026 – Present
            </span>
          </div>
          <ul className="list-disc pl-4 space-y-1 text-xs sm:text-[12.5px] text-zinc-800 marker:text-black">
            <li>
              Build and enhance responsive web interfaces using React.js and
              modern frontend practices for production web pages and admin
              panels.
            </li>
            <li>
              Resolve QA-reported issues through structured testing and debugging
              across desktop and mobile environments.
            </li>
            <li>
              Integrate frontend features with REST APIs, collaborating with the
              development team via Git and GitHub.
            </li>
            <li>
              Contribute to code maintenance and responsive optimization to
              ensure consistent performance across devices.
            </li>
          </ul>
        </div>

        {/* Freelancer */}
        <div className="mb-3">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs sm:text-[13px] mb-1">
            <div>
              <span className="font-bold text-black">
                Technical Freelancer – IT &amp; Security Services
              </span>{" "}
              <span className="text-zinc-500 font-light">|</span>{" "}
              <span className="italic text-zinc-700">Self-employed</span>
            </div>
            <span className="text-xs text-zinc-600 font-medium">
              2024 – Present
            </span>
          </div>
          <ul className="list-disc pl-4 text-xs sm:text-[12.5px] text-zinc-800 marker:text-black">
            <li>
              Deliver networking, technical support, CCTV, and access-control
              solutions for clients, diagnosing and resolving hardware,
              software, and connectivity issues.
            </li>
          </ul>
        </div>

        {/* TechMax */}
        <div className="mb-3">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs sm:text-[13px] mb-1">
            <div>
              <span className="font-bold text-black">
                Network Administrator &amp; Security Installer
              </span>{" "}
              <span className="text-zinc-500 font-light">|</span>{" "}
              <span className="italic text-zinc-700">TechMax</span>
            </div>
            <span className="text-xs text-zinc-600 font-medium">2023 – 2024</span>
          </div>
          <ul className="list-disc pl-4 space-y-1 text-xs sm:text-[12.5px] text-zinc-800 marker:text-black">
            <li>
              Executed network deployments and diagnostics, resolving
              system-level issues across client environments.
            </li>
            <li>Installed and configured security systems for client sites.</li>
          </ul>
        </div>

        {/* FEMTECH IT */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs sm:text-[13px] mb-1">
            <div>
              <span className="font-bold text-black">Technical Officer</span>{" "}
              <span className="text-zinc-500 font-light">|</span>{" "}
              <span className="italic text-zinc-700">FEMTECH IT</span>
            </div>
            <span className="text-xs text-zinc-600 font-medium">2022 – 2023</span>
          </div>
          <ul className="list-disc pl-4 text-xs sm:text-[12.5px] text-zinc-800 marker:text-black">
            <li>
              Resolved hardware and software issues for end users while
              supporting ongoing maintenance of network infrastructure.
            </li>
          </ul>
        </div>
      </section>

      {/* Selected Software Projects */}
      <section className="mb-5">
        <h2 className="text-xs sm:text-[13px] font-bold text-black uppercase tracking-wider pb-1 border-b-[1.8px] border-blue-700 mb-2.5">
          SELECTED SOFTWARE PROJECTS
        </h2>

        {/* Fila Yoruba */}
        <div className="mb-3.5">
          <div className="text-xs sm:text-[13px] mb-1">
            <span className="font-bold text-black">
              Fila Yoruba E-Commerce Platform
            </span>{" "}
            <span className="text-zinc-500 font-light">|</span>{" "}
            <span className="italic text-zinc-700">
              Next.js, TypeScript, Tailwind CSS
            </span>
          </div>
          <ul className="list-disc pl-4 space-y-1 text-xs sm:text-[12.5px] text-zinc-800 marker:text-black">
            <li>
              Built a full-featured e-commerce platform for a premium Yoruba Fila
              brand, combining a responsive customer storefront with an
              integrated admin and back-office management system.
            </li>
            <li>
              Developed core commerce features including product/collection
              management, cart, wishlist, filtering, checkout, order management,
              inventory/stock tracking, and payment workflows.
            </li>
            <li>
              Designed administrative tools for managing products, orders,
              inventory, customers, and sales operations from a centralized
              dashboard, using Zustand and TanStack React Query for state and
              data management.
            </li>
          </ul>
        </div>

        {/* Attendance Management System */}
        <div className="mb-3">
          <div className="text-xs sm:text-[13px] mb-1">
            <span className="font-bold text-black">
              Attendance Management System
            </span>{" "}
            <span className="text-zinc-500 font-light">|</span>{" "}
            <span className="italic text-zinc-700">
              React.js, JavaScript, Tailwind CSS
            </span>
          </div>
          <ul className="list-disc pl-4 text-xs sm:text-[12.5px] text-zinc-800 marker:text-black">
            <li>
              Developed a role-based attendance system with dedicated
              administrator, lecturer, and student experiences, incorporating
              responsive interfaces and application state management.
            </li>
          </ul>
        </div>

        {/* Additional Projects */}
        <div>
          <div className="text-xs sm:text-[13px] mb-1">
            <span className="font-bold text-black">
              Additional React &amp; JavaScript Projects
            </span>{" "}
            <span className="text-zinc-500 font-light">|</span>{" "}
            <span className="italic text-zinc-700">
              Music player, memory card game, notepad app, weather app
            </span>
          </div>
          <ul className="list-disc pl-4 text-xs sm:text-[12.5px] text-zinc-800 marker:text-black">
            <li>
              Built a music player, memory card game, notepad application, and
              weather application, demonstrating component architecture, state
              management, and API integration across varied use cases.
            </li>
          </ul>
        </div>
      </section>

      {/* Education */}
      <section className="mb-5">
        <h2 className="text-xs sm:text-[13px] font-bold text-black uppercase tracking-wider pb-1 border-b-[1.8px] border-blue-700 mb-2.5">
          EDUCATION
        </h2>
        <div>
          <div className="font-bold text-black text-xs sm:text-[13px]">
            B.Tech. Telecommunications Engineering (In Progress)
          </div>
          <div className="text-xs sm:text-[12.5px] text-zinc-700 mt-0.5">
            Federal University of Technology, Minna | 400 Level | Expected
            Graduation: 2027
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section>
        <h2 className="text-xs sm:text-[13px] font-bold text-black uppercase tracking-wider pb-1 border-b-[1.8px] border-blue-700 mb-2.5">
          CERTIFICATIONS
        </h2>
        <ul className="list-disc pl-4 space-y-1 text-xs sm:text-[12.5px] text-zinc-800 marker:text-black">
          <li>CCNA – Makintouch (2022)</li>
          <li>Diploma in Networking (Network+) – Femtech IT (2021)</li>
          <li>
            Diploma in Computer Engineering (CompTIA A+) – Femtech IT (2021)
          </li>
        </ul>
      </section>
    </div>
  );
}
