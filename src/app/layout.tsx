import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Villardonnel",
  description: "Site officiel de la commune de Villardonnel",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      className={`h-full suppressHydrationWarning system`}
    >
      <body className="min-h-full brand-secondary flex flex-col">
        <ThemeProvider>
            {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
