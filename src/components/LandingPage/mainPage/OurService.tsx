import Container from "@/components/shared/HomeLayout/container";
import { BlogHeader } from "@/components/shared/ReuseAble";

const OurService = () => {
	return (
		<div>
			<BlogHeader
				title="Our Services"
				text="Unlock exclusive benefits with our specially curated premium packages designed just for you."
				showLink={false}
				path="/"
			/>
			<Container>
				<div className="my-12 flex flex-col gap-20">
					<div className="flex items-center justify-between gap-3">
						<img
							src="/images/risk-image.png"
							alt="Risk"
							className="w-[40%] rounded-2xl"
						/>
						<div className="w-[55%]">
							<h3 className="font-[600] text-[21px] text-black mb-3">
								AI Powered Risk Profile
							</h3>
							<p className="text-[rgba(0,0,0,0.6)]">
								Unlock unlimited access to premium content with our subscription
								service, providing you with exclusive perks and features
								tailored to your interests Unlock unlimited access to premium
								content with our subscription service, providing you with
								exclusive perks and features tailored to your interests
							</p>
						</div>
					</div>
					<div className="flex items-center justify-between gap-3">
						<div className="w-[55%]">
							<h3 className="font-[600] text-[21px] text-black mb-3">
								Engage with T&O Standings
							</h3>
							<p className="text-[rgba(0,0,0,0.6)]">
								Unlock unlimited access to premium content with our subscription
								service, providing you with exclusive perks and features
								tailored to your interests Unlock unlimited access to premium
								content with our subscription service, providing you with
								exclusive perks and features tailored to your interests
							</p>
						</div>
						<img
							src="/images/threat-tree.png"
							alt="Risk"
							className="w-[40%] rounded-2xl"
						/>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default OurService;
