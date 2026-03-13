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
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";

export default function HomePage() {
  return (
    <>
      <LocalBusinessSchema />
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
