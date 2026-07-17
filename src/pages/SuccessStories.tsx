import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import SuccessStories from "@/components/successStories";

const SuccessStoriesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <SuccessStories />
      </main>
      <Footer />
    </div>
  );
};

export default SuccessStoriesPage;
