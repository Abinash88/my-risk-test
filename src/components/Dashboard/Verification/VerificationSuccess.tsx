const VerificationSuccess = () => {
	return (
		<>
			<img
				src="/images/verify-success.png"
				alt=""
				className="w-[50%] mr-auto ml-auto mt-3"
			/>
			<div className="mt-8">
				<div className="flex items-center gap-1 justify-center">
					<img
						src="/images/profile-image.jpeg"
						alt="profile-image"
						className="rounded-full aspect-square object-cover h-[40px] w-[40px] md:h-[53px] md:w-[53px] mb-4"
					/>
					<div className="hidden md:flex gap-1 items-center">
						<h3 className="text-[#000080] text-[13px] font-[600]">
							Uther Martin
						</h3>
						<img
							src="/images/verify-success.png"
							alt="badge"
							className="w-[15px]"
						/>
					</div>
				</div>
				<h3 className="font-[600] text-[21px] mb-3">
					Congratulations! You are verified.
				</h3>
			</div>
		</>
	);
};

export default VerificationSuccess;
