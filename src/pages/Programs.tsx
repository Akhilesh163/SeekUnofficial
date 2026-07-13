import { Navbar } from "@/components/Navbar";
import AboutGre from "@/components/aboutGre";

const Programs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-[96px]">
        <AboutGre />
      </main>
    </div>
  );
};

export default Programs;
