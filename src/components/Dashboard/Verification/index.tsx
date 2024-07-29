import StartVerification from "./StartVerification";

const Verification = () => {
	return (
		<div>
			<h4 className="font-[600] text-[25px]">Verification</h4>
			<div className="flex items-center justify-center mt-5">
				<div className="bg-white rounded-md py-9 px-7 w-full md:w-[90%] lg:w-[45%] text-center">
					<StartVerification />
					{/* <VerificationReview /> */}
					{/* <VerificationSuccess /> */}
				</div>
			</div>
		</div>
	);
};

export default Verification;
