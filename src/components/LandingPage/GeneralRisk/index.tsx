import { BgSection } from "@/components/shared/ReuseAble";
import PageOne from "./GeneralRiskPages/PageOne";
import ProgressBar from "@/components/AuthPages/Business/ProgressBar";
import { useState } from "react";
import PageTwo from "./GeneralRiskPages/PageTwo";
import PageThree from "./GeneralRiskPages/PageThree";
import GneratedRiskPRofile from "./GeneralRiskPages/GeneratedRiskProfile";

const GeneralRisk = () => {
	const [currentStep, setCurrentStep] = useState(1);

	const handleNextStep = () => {
		setCurrentStep((prev) => prev + 1);
	};

	const handleStepClick = (step: number) => {
		setCurrentStep(step);
	};
	const renderPage = () => {
		switch (currentStep) {
			case 1:
				return <PageOne onNext={handleNextStep} />;
			case 2:
				return <PageTwo onNext={handleNextStep} />;
			case 3:
				return <PageThree onNext={handleNextStep} />;
			case 4:
				return <GneratedRiskPRofile />;
			default:
				return <PageOne onNext={handleNextStep} />;
		}
	};
	return (
		<BgSection image="/images/background.png">
			<div className="w-full md:w-[55%] my-10">
				<div className="mb-4">
					{currentStep < 4 && (
						<ProgressBar
							currentStep={currentStep}
							totalSteps={3}
							onStepClick={handleStepClick}
						/>
					)}
				</div>
				<>{renderPage()}</>
			</div>
		</BgSection>
	);
};

export default GeneralRisk;
