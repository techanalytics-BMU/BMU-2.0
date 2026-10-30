import CampaignTracker from '@/components/layout/CampaignTracker/CampaignTracker';
import Footer from '@/components/layout/Footer/Footer';
import LeadPopup from '@/components/layout/LeadPopup/LeadPopup';
import Navbar from '@/components/layout/Navbar/Navbar';
import SmoothScroll from '@/components/layout/SmoothScroll/SmoothScroll';

// The public website: smooth scrolling, navbar, footer and the lead popup on every page, plus
// remembering where the visit came from for the lead forms
export default function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <CampaignTracker />
      <SmoothScroll />
      <Navbar />
      {children}
      <Footer />
      <LeadPopup />
    </>
  );
}
