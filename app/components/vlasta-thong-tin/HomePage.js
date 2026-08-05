import dynamic from "next/dynamic";
import ComplianceNoticeBar from "@/app/components/vlasta-thong-tin/ComplianceNoticeBar";
import Navbar from "@/app/components/vlasta-thong-tin/Navbar";
import Hero from "@/app/components/vlasta-thong-tin/Hero";
import Intro from "@/app/components/vlasta-thong-tin/Intro";
import OfferLeadSection, { PriceCheckLeadSection } from "@/app/components/vlasta-thong-tin/OfferLeadSection";
import Reasons from "@/app/components/vlasta-thong-tin/Reasons";
import Lifestyle from "@/app/components/vlasta-thong-tin/Lifestyle";
import Pool from "@/app/components/vlasta-thong-tin/Pool";
import Location from "@/app/components/vlasta-thong-tin/Location";
import Legal from "@/app/components/vlasta-thong-tin/Legal";
import FloorPlans from "@/app/components/vlasta-thong-tin/FloorPlans";
import Progress from "@/app/components/vlasta-thong-tin/Progress";
import Pricing from "@/app/components/vlasta-thong-tin/Pricing";
import SalesPolicy from "@/app/components/vlasta-thong-tin/SalesPolicy";
import CTA from "@/app/components/vlasta-thong-tin/CTA";
import PriceForm from "@/app/components/vlasta-thong-tin/PriceForm";
import PrivacyPolicy from "@/app/components/vlasta-thong-tin/PrivacyPolicy";
import TermsDisclaimer from "@/app/components/vlasta-thong-tin/TermsDisclaimer";
import Footer from "@/app/components/vlasta-thong-tin/Footer";
import { ThongTinTracking } from "@/app/components/vlasta-thong-tin/thong-tin-tracking";

const Gallery = dynamic(() => import("@/app/components/vlasta-thong-tin/Gallery"));
const LeadFormModal = dynamic(() => import("@/app/components/vlasta-thong-tin/LeadFormModal"));
const FloatingCTA = dynamic(() => import("@/app/components/vlasta-thong-tin/FloatingCTA"));
const ScrollToSection = dynamic(() => import("@/app/components/vlasta-thong-tin/ScrollToSection"));

export default function HomePage({ initialSection = undefined }) {
  return (
    <div className="vlasta-thong-tin-page bg-warm-white text-charcoal">
      <ThongTinTracking />
      <ScrollToSection sectionId={initialSection} />
      <ComplianceNoticeBar />
      <Navbar stackedBelowCompliance />
      <div id="vlasta-thong-tin-content">
        <Hero />
        <Intro />
        <OfferLeadSection />
        <Location />
        <PriceCheckLeadSection />
        <Reasons />
        <Gallery />
        <Lifestyle />
        <Pool />
        <FloorPlans />
        <Pricing />
        <SalesPolicy />
        <Legal />
        <Progress />
        <CTA />
        <PriceForm />
        <PrivacyPolicy />
        <TermsDisclaimer />
      </div>
      <LeadFormModal />
      <Footer />
      <FloatingCTA />
    </div>
  );
}
