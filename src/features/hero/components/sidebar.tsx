"use client";

import React from "react";
import type { SidebarProps } from "../types";
import Link from "next/link";

export const Sidebar: React.FC<SidebarProps> = ({ links, privacyPolicyUrl, cguUrl }) => {
  return (
    <aside className="hidden text-background md:flex sticky left-0 top-0 h-screen w-60 bg-foreground border-r border-border flex-col justify-between p-6 z-50">
      <div>
        <h2 className="text-2xl font-bold mb-8">Villardonnel</h2>
        <nav className="space-y-4 ml-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-lg hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="text-sm text-muted-foreground space-y-2">
        <span className="text-xs text-credits">
          © {new Date().getFullYear()} Commune Villardonnel.
        </span>
        <div className="flex flex-col space-y-1">
          <Link href={privacyPolicyUrl} className="hover:underline">Politique de confidentialité</Link>
          <Link href={cguUrl} className="hover:underline">CGU</Link>
        </div>
      </div>
    </aside>
  );
};
