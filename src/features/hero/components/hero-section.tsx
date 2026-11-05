"use client";

import Image from "next/image";
import React from "react";

export const HeroSection: React.FC = () => {
  

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative min-h-screen z-10 w-full flex items-center justify-center">
        {/* Image Overlay for better contrast */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/Villardonnel_Capservy.jpg"
            alt="Background"
            sizes="fill"
            fill
            priority
          />
          <div className="absolute inset-0 z-1 bg-black/50" />
        </div>

        <div className="relative z-20 w-full max-w-4xl flex flex-col items-center justify-center text-center p-8 md:p-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Bienvenue à Villardonnel</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Découvrez les actualités, les services et les opportunités de notre commune.
          </p>
          <button className="mt-8 px-8 py-3 bg-credits text-credits-foreground rounded-full font-bold hover:text-primary-foreground hover:bg-secondary transition-colors shadow-lg">
            En savoir plus
          </button>
        </div>
      </div>
    </div>
  );
};
