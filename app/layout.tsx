import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ibrahim Aliy — Frontend Developer",
  description:
    "Frontend developer building fast, scalable and visually refined digital products with React, Next.js, TypeScript and Tailwind CSS. Based in Nigeria.",
  keywords: [
    "Ibrahim Aliy",
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Web Developer Nigeria",
    "UI Engineer",
    "Telecommunications Engineering",
  ],
  authors: [{ name: "Ibrahim Aliy" }],
  creator: "Ibrahim Aliy",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Ibrahim Aliy — Frontend Developer",
    description:
      "Frontend developer building fast, scalable and visually refined digital products with React, Next.js, TypeScript and Tailwind CSS. Based in Nigeria.",
    siteName: "Ibrahim Aliy Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ibrahim Aliy — Frontend Developer",
    description:
      "Frontend developer building fast, scalable and visually refined digital products with React, Next.js, TypeScript and Tailwind CSS. Based in Nigeria.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ibrahim Aliy",
  jobTitle: "Frontend Developer",
  telephone: "+234 810 362 8977",
  email: "ibrahimaliy1907@gmail.com",
  worksFor: {
    "@type": "Organization",
    name: "Outcess Solutions",
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Federal University of Technology, Minna",
  },
  sameAs: [
    "https://github.com/ibrahimaliy",
    "https://www.linkedin.com/in/ibrahim-aliy-1ba7a3434",
    "https://x.com/ibrahimaliy_19"
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "Nigeria",
  },
  knowsAbout: [
    "Frontend Development",
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Zustand",
    "TanStack React Query",
    "REST API Integration",
    "Cisco Networking",
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "CCNA",
      recognizedBy: "Makintouch",
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "Diploma in Networking (Network+)",
      recognizedBy: "Femtech IT",
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "Diploma in Computer Engineering (CompTIA A+)",
      recognizedBy: "Femtech IT",
    },
  ],
};

const themeScript = `
(function() {
  try {
    var stored = localStorage.getItem('portfolio-theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var isDark = stored === 'dark' || (!stored && prefersDark) || (stored === 'system' && prefersDark);
    var root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
      root.setAttribute('data-theme', 'dark');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
      root.style.colorScheme = 'light';
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: themeScript }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased selection:bg-emerald-500/20 selection:text-emerald-500 dark:selection:text-emerald-300">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

