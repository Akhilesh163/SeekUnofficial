import { Navbar } from "@/components/Navbar";
import GrePrivateTut from "@/components/grePrivatetut";

const GrePrivateTutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-[96px]">
        <GrePrivateTut />
      </main>
    </div>
  );
};

export default GrePrivateTutPage;
