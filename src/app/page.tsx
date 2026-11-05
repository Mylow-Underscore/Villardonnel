import { HeroSection } from "@/features/hero/components/hero-section";
import { NewsSection } from "@/features/news/components/news-section";
import { ContactSection } from "@/features/contact/components/contact-section";
import { UsefulLinksSection } from "@/features/useful-links/components/useful-links-section";
import { PageLayout } from "@/components/layout/page-layout";

export default function Page() {
  return (
    <PageLayout>
      <HeroSection />
      <NewsSection />
      <ContactSection />
      <UsefulLinksSection />
    </PageLayout>
  );
}
