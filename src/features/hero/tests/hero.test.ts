import "@testing-library/jest-dom/vitest";
import { createElement } from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { HeroSection } from "@/features/hero/components/hero-section";
import { PageLayout } from "@/components/layout/page-layout";

describe("HeroSection", () => {
  it("renders the title correctly", () => {
    render(createElement(HeroSection));
    expect(screen.getByText(/Bienvenue à Villardonnel/i)).toBeInTheDocument();
  });

  it("renders the sidebar links", () => {
    render(createElement(PageLayout));
    expect(screen.getByText("Accueil")).toBeInTheDocument();
    expect(screen.getByText("Bordereau")).toBeInTheDocument();
    expect(screen.getByText("Actualités")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });
});