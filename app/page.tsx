import HeroPage from "@/components/blocks/main";
import Academia from "@/components/blocks/sections/AcademySection"
import HeroSection from "@/components/blocks/hero/hero";
import SupportSection from "@/components/blocks/sections/SupportSection";
import EnglishSection from "@/components/blocks/sections/EnglishSection";
import WhySection from "@/components/blocks/sections/WhySection";
import TeacherSection from "@/components/blocks/sections/TeacherSection";
import ScienceSection from "@/components/blocks/sections/ScienceSection";
import LocationSection from "@/components/blocks/sections/LocationSection";
import CountersSection from "@/components/blocks/sections/CountersSection";
import FaqSection from "@/components/blocks/sections/FaqSection";
import GallerySection from "@/components/blocks/sections/GallerySection";
import SiteFooter from "@/components/blocks/layout/SiteFooter";
import WhatsAppFloat from "@/components/blocks/layout/WhatsAppFloat";
import BackToTop from "@/components/blocks/layout/BackToTop";
import { SpeedInsights } from '@vercel/speed-insights/react'

export default function Page() {
  return (
    <div id="top" className="relative bg-white">
      <HeroPage />
      <main>
      <SupportSection />
      <EnglishSection />
      <WhySection />
      <TeacherSection />
      <ScienceSection />
      <LocationSection />
      <CountersSection />
      <Academia />
      <FaqSection />
      {/* <GallerySection /> */}
      </main>

    <SiteFooter />
    <WhatsAppFloat />
    <BackToTop />
    <SpeedInsights />


    </div>
  );
}
