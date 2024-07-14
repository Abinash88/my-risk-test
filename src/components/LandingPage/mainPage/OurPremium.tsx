import { BlogHeader } from "@/components/shared/ReuseAble";

const OurPremium = () => {
	return (
		<div>
			<BlogHeader
				title="Premium Features"
				text="Unlock exclusive benefits with our specially curated premium packages designed just for you."
				showLink={false}
				path="/"
			/>
		</div>
	);
};

export default OurPremium;
