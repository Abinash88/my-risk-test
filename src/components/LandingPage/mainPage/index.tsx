import ScrollTop from "@/lib/hooks/scroll-top";
import { BlogHeader } from "./landingAnimate";
import NewsRoom from "./NewsRoom";
import ServiceType from "./ServiceType";
import SusbscribeSection from "./SusbscribeSection";
import TandO from "./TandO";

const LandingPage = () => {
  ScrollTop()
  return (
    <div>
      <BlogHeader
        title="HERMANDAI RISK PLATFORM"
        text="Generate AI Risk Profile. Engage with T & O Standing"
        path="/auth"
      />
      <div className="bg-white relative z50">
        <ServiceType />
        <TandO />
        <NewsRoom />
        <SusbscribeSection />
      </div>
    </div>
  );
};

export default LandingPage;
