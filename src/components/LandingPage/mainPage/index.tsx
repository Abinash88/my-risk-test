import { BlogHeader } from "../../shared/ReuseAble";
import NewsRoom from "./NewsRoom";
import ServiceType from "./ServiceType";
import SusbscribeSection from "./SusbscribeSection";
import TandO from "./TandO";

const LandingPage = () => {
	return (
		<div>
			<BlogHeader
				title="HERMANDAI RISK PLATFORM"
				text="Generate AI Risk Profile . Engage with T & O Standing"
				path="/auth"
			/>
			<ServiceType />
			<TandO />
			<NewsRoom />
			<SusbscribeSection />
		</div>
	);
};

export default LandingPage;
