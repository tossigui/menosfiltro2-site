import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import ProductsSection from "@/components/ProductsSection";
import IndividualProductsSection from "@/components/IndividualProductsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <BenefitsSection />
      <ProductsSection />
      <IndividualProductsSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
