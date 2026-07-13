import { Navbar } from "@/components/Navbar";
import GmatPrivateTut from "@/components/gmatPrivatetut";

const GmatPrivateTutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-[96px]">
        <GmatPrivateTut />
      </main>
    </div>
  );
};

export default GmatPrivateTutPage;
