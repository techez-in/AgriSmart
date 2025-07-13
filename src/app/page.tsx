import Header from '@/components/agri-smart/Header';
import HeroSection from '@/components/agri-smart/HeroSection';
import HowItWorksSection from '@/components/agri-smart/HowItWorksSection';
import BenefitsSection from '@/components/agri-smart/BenefitsSection';
import DashboardPreviewSection from '@/components/agri-smart/DashboardPreviewSection';
import PricingSection from '@/components/agri-smart/PricingSection';
import GrantsSection from '@/components/agri-smart/GrantsSection';
import LeadGenFormSection from '@/components/agri-smart/LeadGenFormSection';
import FaqSection from '@/components/agri-smart/FaqSection';
import Footer from '@/components/agri-smart/Footer';

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
