import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { ServiceOverview } from "@/components/home/ServiceOverview";
import { WhyUs } from "@/components/home/WhyUs";
import { Process } from "@/components/home/Process";
import { ForWhom } from "@/components/home/ForWhom";
import { RegionKöln } from "@/components/home/RegionKöln";
import { Trust } from "@/components/home/Trust";
import { BlogTeaser } from "@/components/home/BlogTeaser";
import { HomeFAQ } from "@/components/home/HomeFAQ";
import { CTASection } from "@/components/home/CTASection";
import { HomeWebPageSchema } from "@/components/seo/HomeWebPageSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { homeFAQ } from "@/data/faq";
import { canonicalUrl } from "@/config/site";

export const metadata: Metadata = {
  title: "Arbeitssicherheit & Arbeitsschutz Köln – externe SiFa & Betreuung",
  description:
    "Arbeitssicherheit und Arbeitsschutz in Köln: externe SiFa, Gefährdungsbeurteilungen, Unterweisungen – Ihr Partner für Betriebe vor Ort.",
  openGraph: {
    title: "Arbeitssicherheit & Arbeitsschutz Köln | Externe SiFa",
    description:
      "SiFa in Köln: Arbeitssicherheit, Gefährdungsbeurteilung, Unterweisungen und Arbeitsschutz-Betreuung für Betriebe – vor Ort.",
    url: canonicalUrl("/"),
  },
  alternates: { canonical: canonicalUrl("/") },
};

export default function HomePage() {
  return (
    <>
      <HomeWebPageSchema />
      <FAQSchema items={homeFAQ} pageUrl={canonicalUrl("/")} />
      <Hero />
      <ServiceOverview />
      <WhyUs />
      <Process />
      <ForWhom />
      <RegionKöln />
      <Trust />
      <BlogTeaser />
      <HomeFAQ />
      <CTASection />
    </>
  );
}
