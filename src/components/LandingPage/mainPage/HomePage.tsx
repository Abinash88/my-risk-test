import { BgSection } from "@/components/shared/ReuseAble";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const HomePage = () => {
	return (
		<BgSection image="/images/background.png">
			<div className="flex flex-col md:flex-row gap-12 justify-center">
				<div className="bg-white  px-6 py-8 rounded-2xl text-black w-full md:w-[40%]">
					<img
						src="/images/Engage.png"
						alt="Ai-Powered-Risk"
						className="md:w-[30%] mr-auto ml-auto"
					/>
					<h3 className="font-[600] text-[30px]">AI Powered Risk Profile</h3>
				</div>
				<div className="bg-white  px-6 py-8 rounded-2xl text-black w-full md:w-[40%]">
					<img
						src="/images/mechanical.png"
						alt="Mechanical"
						className="w-[30%] mr-auto ml-auto"
					/>
					<h3 className="font-[600] text-[30px]">Engage with T & O Standing</h3>
				</div>
			</div>
		</BgSection>
	);
};

export default HomePage;

export const AIModel = () => {
	return (
		<BgSection image="/images/background.png">
			<div className="bg-white rounded-lg w-full md:w-[50%]">
				<div className="text-left font-[600] text-[20px] mb-6">
					<h4 className="text-[#000080] p-4 border-b border-b-[rgba(0,0,0,0.59)]">
						Select AI model
					</h4>
				</div>
				<div className="p-4 flex justify-center gap-5 flex-wrap text-black">
					<div className="w-[40%]">
						<div className="rounded-lg shadow-md p-3 bg-white w-full">
							<img
								src="/images/blue-logo.png"
								alt="Risk-forum-logo"
								className="w-[50px] mr-auto ml-auto"
							/>
							<p>gpt-4-32k-0314</p>
						</div>
						<h5 className="font-600 mt-2">$1400</h5>
					</div>
					<div className="w-[40%]">
						<div className="rounded-lg shadow-md p-3 bg-white w-full">
							<img
								src="/images/blue-logo.png"
								alt="Risk-forum-logo"
								className="w-[50px] mr-auto ml-auto"
							/>
							<p>gpt-4-32k-0314</p>
						</div>
						<h5 className="font-600 mt-2">$100</h5>
					</div>
					<div className="w-[40%]">
						<div className="rounded-lg shadow-md p-3 bg-white w-full">
							<img
								src="/images/blue-logo.png"
								alt="Risk-forum-logo"
								className="w-[50px] mr-auto ml-auto"
							/>
							<p>gpt-4-32k-0314</p>
						</div>
						<h5 className="font-600 mt-2">$3200</h5>
					</div>
					<div className="w-[40%]">
						<div className="rounded-lg shadow-md p-3 bg-white w-full">
							<img
								src="/images/blue-logo.png"
								alt="Risk-forum-logo"
								className="w-[50px] mr-auto ml-auto"
							/>
							<p>gpt-4-32k-0314</p>
						</div>
						<h5 className="font-600 mt-2">$1200</h5>
					</div>
				</div>
				<div className="w-full flex gap-4 justify-between p-6">
					<button className="text-white bg-[#000080] p-3 rounded-lg w-[50%]">
						Back
					</button>
					<button className="text-white bg-[#000080] p-3 rounded-lg w-[50%]">
						Next
					</button>
				</div>
			</div>
		</BgSection>
	);
};

export const GenerateDownload = () => {
	return (
		<BgSection image="/images/background.png">
			<div className="flex flex-col gap-4 justify-center items-center w-full md:w-[50%]">
				<button className="bg-white text-[#000080] p-5 font-[600] text-[20px] text-center w-full rounded-lg ">
					Generate and Download
				</button>
				<button className="bg-white text-[#000080] p-5 font-[600] text-[20px] text-center w-full rounded-lg">
					Upload Risk
				</button>
				<Link to="/home-page" className="mt-5">
					<FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
					Go back{" "}
				</Link>
			</div>
		</BgSection>
	);
};
