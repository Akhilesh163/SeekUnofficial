import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Programs from "./pages/Programs";
import SelfPacedPage from "./pages/SelfPaced";
import GreLivePage from "./pages/GreLive";
import GrePrivateTutPage from "./pages/GrePrivateTut";
import GmatLivePage from "./pages/GmatLive";
import GmatSelfPacedPage from "./pages/GmatSelfPaced";
import GmatPrivateTutPage from "./pages/GmatPrivateTut";
import AboutGmatPage from "./pages/AboutGmat";
import Admission from "@/components/admission";
import NotFound from "./pages/NotFound";
import TermsAndConditions from "./pages/TermsAndConditions";
import RefundPolicy from "./pages/RefundPolicy";
import ContactUs from "./pages/ContactUs";
import SuccessStoriesPage from "./pages/SuccessStories";
import { FormSubmitFrame } from "@/components/FormSubmitFrame";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <FormSubmitFrame />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/about-gmat" element={<AboutGmatPage />} />
          <Route path="/gre-live" element={<GreLivePage />} />
          <Route path="/self-paced" element={<SelfPacedPage />} />
          <Route path="/gmat-self-paced" element={<GmatSelfPacedPage />} />
          <Route path="/gmat-live" element={<GmatLivePage />} />
          <Route path="/gmat-private-tutoring" element={<GmatPrivateTutPage />} />
          <Route path="/tutoring" element={<GrePrivateTutPage />} />
          <Route path="/admissions" element={<Admission />} />
          <Route path="/book-demo" element={<Index />} />
          <Route path="/success-stories" element={<SuccessStoriesPage />} />
          <Route path="/about" element={<Index />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/contact" element={<ContactUs />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
