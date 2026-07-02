import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutMe } from "@/components/AboutMe";
import { ProductJourney } from "@/components/ProductJourney";
import { SupportTabs } from "@/components/SupportTabs";
import { Testimonials } from "@/components/Testimonials";
import { BookDemoForm } from "@/components/BookDemoForm";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { ScrollToSection } from "@/components/ScrollToSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollToSection />
      <Navbar />
      <main>
        <Hero />
        <AboutMe />
        <ProductJourney />
        <SupportTabs />
        <Testimonials />
        <BookDemoForm />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
