import Header from '@/components/agri-tek/Header';
import HeroSection from '@/components/agri-tek/HeroSection';
import HowItWorksSection from '@/components/agri-tek/HowItWorksSection';
import BenefitsSection from '@/components/agri-tek/BenefitsSection';
import DashboardPreviewSection from '@/components/agri-tek/DashboardPreviewSection';
import PricingSection from '@/components/agri-tek/PricingSection';
import GrantsSection from '@/components/agri-tek/GrantsSection';
import LeadGenFormSection from '@/components/agri-tek/LeadGenFormSection';
import FaqSection from '@/components/agri-tek/FaqSection';
import Footer from '@/components/agri-tek/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <HowItWorksSection />
        <BenefitsSection />
        <DashboardPreviewSection />
        <PricingSection />
        <GrantsSection />
        <LeadGenFormSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
