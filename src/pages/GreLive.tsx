import { Navbar } from "@/components/Navbar";
import GreLiveComponent from "@/components/greLive";

const GreLivePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-[96px]">
        <GreLiveComponent />
      </main>
    </div>
  );
};

export default GreLivePage;
