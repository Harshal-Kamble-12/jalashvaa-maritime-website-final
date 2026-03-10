import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Fleet from "./pages/Fleet";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import CompanyPolicies from "./pages/companypolicies";
import DemoHero from "@/pages/DemoHero";     //demo page
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CompanyOverview from "./pages/about/company-overview";
import VisionMission from "./pages/about/vision-mission";
import BoardMembers from "./pages/about/board-members";
import ManagementTeam from "./pages/about/management-team";
import VoyageSoFar from "./pages/about/voyage-so-far";
import News from "./pages/news";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/fleet" element={<Fleet />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
          <Route path="/companypolicies" element={<CompanyPolicies />} />
          <Route path="/demo-hero" element={<DemoHero />} />    
          <Route path="*" element={<NotFound />} />
          <Route path="/about/company-overview" element={<CompanyOverview />} />
          <Route path="/about/vision-mission" element={<VisionMission />} />
          <Route path="/about/board-members" element={<BoardMembers />} />
          <Route path="/about/management-team" element={<ManagementTeam />} /> 
          <Route path="/about/voyage-so-far" element={<VoyageSoFar />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
