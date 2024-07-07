import { BlogHeader } from "../../shared/ReuseAble";
import NewsRoom from "./NewsRoom";
import ServiceType from "./ServiceType";
import TandO from "./TandO";

const LandingPage = () => {
	return (
		<div>
			<BlogHeader
				title="HERMANDAI RISK PLATFORM"
				text="Generate AI Risk Profile . Engage with T & O Standing"
				path="/"
			/>
			<ServiceType />
			<NewsRoom />
			<TandO />
		</div>
	);
};

export default LandingPage;
