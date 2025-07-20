import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PricingSection from "@/components/PricingSection";
import TrustSection from "@/components/TrustSection";
import FAQSection from "@/components/FAQSection";
import AboutUsSection from "@/components/AboutUsSection";
import CareersSection from "@/components/CareersSection";
import ArticlesSection from "@/components/ArticlesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <TrustSection />
      <AboutUsSection />
      <PricingSection />
      <FAQSection />
      <CareersSection />
      <ArticlesSection />
      <Footer />
    </div>
  );
};

export default Index;
