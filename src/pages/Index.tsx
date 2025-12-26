import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProductJourney } from "@/components/ProductJourney";
import { SupportTabs } from "@/components/SupportTabs";
import { PracticeCTA } from "@/components/PracticeCTA";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <ProductJourney />
        <SupportTabs />
        <PracticeCTA />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
