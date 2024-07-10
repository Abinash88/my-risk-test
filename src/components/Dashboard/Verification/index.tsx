const Verification = () => {
	return (
		<div>
			<h4 className="font-[600] text-[25px]">Verification</h4>
			<div className="flex items-center justify-center mt-5">
				<div className="bg-white rounded-md py-9 px-7 w-[45%] text-center">
					<img
						src="/images/verify-status.png"
						alt=""
						className="w-[40%] mr-auto ml-auto mt-7"
					/>
					<div className="mt-8">
						<h3 className="font-[600] text-[19px] mb-6">Get Verified!</h3>
						<p className="font-[400] text-[rgba(0,0,0,0.7)] text-[16px]">
							Verified users stand out with a verification badge next to their
							name and double vote feature!
						</p>
						<button className="text-white bg-[#000080] font-[400] text-[15px] py-3 px-5 text-center rounded-lg mt-9 w-[70%] ml-auto mr-auto">
							Start Verification
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Verification;
