"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const ContactSection = () => {
  return (
    <section className="py-12 mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-8">Contact</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Nous contacter</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Email : contact@villardonnel.fr</p>
            <p>Téléphone : +33 1 23 45 67 89</p>
            <p>Adresse : 12 Rue de la Mairie, 95000 Villardonnel</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Horaires d&apos;ouverture</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-1">
              <li>Lundi - Vendredi : 09h00 - 12h00, 14h00 - 17h00</li>
              <li>Samedi : 09h00 - 12h00</li>
              <li>Dimanche : Fermé</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
