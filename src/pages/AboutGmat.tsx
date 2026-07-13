import { Navbar } from "@/components/Navbar";
import AboutGmat from "@/components/aboutGmat";

const AboutGmatPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-[96px]">
        <AboutGmat />
      </main>
    </div>
  );
};

export default AboutGmatPage;
