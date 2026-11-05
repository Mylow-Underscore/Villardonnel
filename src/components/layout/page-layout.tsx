import React from "react";
import { Sidebar } from "../../features/hero/components/sidebar";
import { Footer } from "./footer";

export function PageLayout({ children }: { children: React.ReactNode }) {
  const links = [
    { label: "Accueil", href: "/" },
    { label: "Bordereau", href: "/bordereau" },
    { label: "Actualités", href: "/actualites" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div className="relative w-full flex">
      <Sidebar
        links={links}
        privacyPolicyUrl="/politique-confidentialite"
        cguUrl="/cgu"
      />
      <main className="flex-1 py-12 md:py-16">
        {children}
        <Footer />
      </main>
    </div>
  );
}