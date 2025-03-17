import Contact from "@/components/contact/contact";
import Business from "@/components/content/business";
import FAQs from "@/components/content/faqs";
import Features from "@/components/content/features";
import Image_1_Section from "@/components/content/image_1_section";
import Image_2_Section from "@/components/content/image_2_section";
import Introduction from "@/components/content/introduction";
import HeroSection from "@/components/hero/hero-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Introduction />
      <Image_1_Section />
      <Features />
      <Image_2_Section />
      <Business />
      <Contact />
      <FAQs />
    </>
  );
}
