"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const NewsSection = () => {
  const news = [
    {
      title: "Inauguration du nouveau parc municipal",
      date: "2026-11-01",
      description: "La commune a inauguré son nouveau parc municipal, un espace vert de 5 hectares dédié aux loisirs et à la biodiversité.",
    },
    {
      title: "Séminaire sur le développement durable",
      date: "2026-10-15",
      description: "Villardonnel a accueilli un séminaire sur les meilleures pratiques en matière de développement durable pour les communes rurales.",
    },
    {
      title: "Renouvellement des infrastructures sportives",
      date: "2026-09-20",
      description: "Travaux de rénovation du gymnase municipal et du terrain de tennis pour accueillir de nouveaux équipements.",
    },
  ];

  return (
    <section className="py-12 mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-8">Actualités</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {news.map((item, index) => (
          <Card key={index} className="p-4">
            <CardHeader>
              <CardTitle className="text-xl">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">{item.date}</p>
              <p>{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
