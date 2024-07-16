interface ProgressBarProps {
	currentStep: number;
	totalSteps: number;
	onStepClick: (step: number) => void;
}

const ProgressBar = ({
	currentStep,
	totalSteps,
	onStepClick,
}: ProgressBarProps) => {
	return (
		<>
			<div className="text-white block mb-7 font-[600] text-[18px]">
				<p>
					{currentStep} of {totalSteps}
				</p>
			</div>
			<div className="flex justify-center gap-5 items-center mb-6">
				{[...Array(totalSteps)].map((_, index) => (
					<div key={index} className="flex-1">
						<div
							className={`h-2 rounded-full cursor-pointer ${
								index < currentStep ? "bg-white" : "bg-[rgba(255,255,255,0.3)]"
							}`}
							onClick={() => index < currentStep && onStepClick(index + 1)}
						/>
					</div>
				))}
			</div>
		</>
	);
};

export default ProgressBar;
