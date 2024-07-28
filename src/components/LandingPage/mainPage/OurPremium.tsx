import Container from "@/components/shared/HomeLayout/container";
import { BlogHeader } from "@/components/shared/ReuseAble";
import { Link } from "react-router-dom";

const OurPremium = () => {
	return (
		<div>
			<BlogHeader
				title="Premium Features"
				text="Unlock exclusive benefits with our specially curated premium packages designed just for you."
				showLink={false}
				path="/"
			/>
			<Container>
				<div className="my-12 flex flex-col gap-20">
					<h3 className="font-[600] text-[24px] md:text-[29px] text-black mb-3 text-center">
						Why T&O Premium Features?
					</h3>
					<div className="flex flex-col md:flex-row items-center justify-between gap-3">
						<div className="w-full md:w-[55%]">
							<img src="/images/ai-icon.png" alt="" className="mb-2" />
							<h3 className="font-[600] text-[21px] text-black mb-3">
								Access to Custom AI Risk Generated Profile
							</h3>
							<p className="text-[rgba(0,0,0,0.6)]">
								Unlock unlimited access to premium content with our subscription
								service, providing you with exclusive perks and features
								tailored to your interests Unlock unlimited access to premium
								content.
							</p>
						</div>
						<img
							src="/images/risk-image.png"
							alt="Risk"
							className="w-full md:w-[40%] rounded-2xl"
						/>
					</div>
					<div className="flex flex-col md:flex-row-reverse items-center justify-between gap-3">
						<div className="w-full md:w-[55%]">
							<img src="/images/ai-icon.png" alt="" className="mb-2" />
							<h3 className="font-[600] text-[21px] text-black mb-3">
								Upload to T&O Standings (Main or Private)
							</h3>
							<p className="text-[rgba(0,0,0,0.6)]">
								Unlock unlimited access to premium content with our subscription
								service, providing you with exclusive perks and features
								tailored to your interests Unlock unlimited access to premium
								content.
							</p>
						</div>
						<img
							src="/images/risk-image.png"
							alt="Risk"
							className="w-full md:w-[40%] rounded-2xl"
						/>
					</div>
					<div className="flex flex-col md:flex-row items-center justify-between gap-3">
						<div className="w-full md:w-[55%]">
							<img src="/images/ai-icon.png" alt="" className="mb-2" />
							<h3 className="font-[600] text-[21px] text-black mb-3">
								Hold Private T&O Groups
							</h3>
							<p className="text-[rgba(0,0,0,0.6)]">
								Unlock unlimited access to premium content with our subscription
								service, providing you with exclusive perks and features
								tailored to your interests Unlock unlimited access to premium
								content.
							</p>
						</div>
						<img
							src="/images/risk-image.png"
							alt="Risk"
							className="w-full md:w-[40%] rounded-2xl"
						/>
					</div>
					<Link
						to="/auth"
						className="bg-[#000080] text-center w-full md:[50%] lg:w-[30%]  mr-auto ml-auto text-white py-4 rounded-lg"
					>
						Get Started Now
					</Link>
				</div>
			</Container>
		</div>
	);
};

export default OurPremium;
