import { useState } from "react";
import { BgSection } from "@/components/shared/ReuseAble";
import Generate from "./Generate";
import View from "./View";
import GenerateRisk2 from "./GenerateRisk2";
import ProgressBar from "@/components/AuthPages/Business/ProgressBar";

const GeneralRisk = () => {
	const [currentStep, setCurrentStep] = useState(1);
	const [page, setPage] = useState<"generate" | "view">("generate");

	const handleNextStep = () => {
		setCurrentStep((prev) => prev + 1);
	};

	const handleStepClick = (step: number) => {
		setCurrentStep(step);
	};

	const renderPageContent = () => {
		if (currentStep === 1) {
			if (page === "generate") {
				return <Generate onNext={handleNextStep} />;
			} else if (page === "view") {
				return <View />;
			}
		} else if (currentStep === 2) {
			if (page === "generate") {
				return <GenerateRisk2 onNext={handleNextStep} />;
			} else if (page === "view") {
				return <Generate onNext={handleNextStep} />;
			}
		} else if (currentStep === 3) {
			if (page === "generate") {
				return <Generate onNext={handleNextStep} />;
			} else if (page === "view") {
				return <View />;
			}
		}
		return null; // Default case
	};

	return (
		<BgSection image="/images/background.png">
			<div className="w-[50%] my-10">
				<h3 className="font-[500] text-[25px] mb-5">
					{currentStep < 4 && (
						<ProgressBar
							currentStep={currentStep}
							totalSteps={3}
							onStepClick={handleStepClick}
						/>
					)}
				</h3>
				{currentStep < 3 && (
					<div className="flex gap-3 justify-between mb-4">
						<button
							className={`p-3 rounded-md shadow-md w-[50%] font-[600] ${
								page === "generate"
									? "bg-[#000080] text-white"
									: "bg-white text-[rgba(0,0,0,0.7)]"
							}`}
							onClick={() => setPage("generate")}
						>
							Generate Risk Profile
						</button>
						<button
							className={`p-3 rounded-md shadow-md w-[50%] font-[600] ${
								page === "view"
									? "bg-[#000080] text-white"
									: "bg-white text-[rgba(0,0,0,0.7)]"
							}`}
							onClick={() => setPage("view")}
						>
							View Risk Profile
						</button>
					</div>
				)}
				<div className="bg-white text-black rounded-lg py-4 px-5 flex flex-col gap-3 items-start">
					{renderPageContent()}
				</div>
			</div>
		</BgSection>
	);
};

export default GeneralRisk;
