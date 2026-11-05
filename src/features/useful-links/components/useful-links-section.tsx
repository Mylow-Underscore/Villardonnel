"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export const UsefulLinksSection = () => {
  const links = [
    { name: "Préfecture De L'Aude", url: "https://www.aude.gouv.fr" },
    { name: "France Services", url: "https://www.france-services.gouv.fr" },
    { name: "Info Gouv", url: "https://www.info.gouv.fr" },
  ];

  return (
    <section className="py-12 mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-8">Liens Utiles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {links.map((link, index) => (
          <Card key={index} className="p-4 hover:bg-accent/25 hover:border-none transition-all cursor-pointer">
            <CardContent className="pt-6">
              <Link href={link.url} target="_blank" rel="noopener noreferrer" className="text-primary font-medium">
                {link.name}
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
