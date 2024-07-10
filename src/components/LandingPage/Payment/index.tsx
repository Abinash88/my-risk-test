import { BgSection } from "../../shared/ReuseAble";

const PayLogo = [
	{
		image: "/images/apple-pay.png",
	},
	{
		image: "/images/amazon.png",
	},
	{
		image: "/images/samsung-pay.png",
	},
	{
		image: "/images/google-pay.png",
	},
	{
		image: "/images/master.png",
	},
	{
		image: "/images/paypal.png",
	},
	{
		image: "/images/visa.png",
	},
	{
		image: "/images/maestro.png",
	},
	{
		image: "/images/circus.png",
	},
];
const PaymentMode = () => {
	return (
		<>
			<BgSection image="images/background.png">
				<div className="bg-white rounded-lg w-[35%] mr-auto ml-auto py-6">
					<h4 className="text-[#000080] border-b border-[#777] text-left pb-3 pl-5 font-[600]">
						Select your Payment Method
					</h4>
					<div className="my-3 px-[5rem] flex justify-center gap-5 flex-wrap  ml-auto mr-auto">
						{PayLogo.map((logo, i) => (
							<button className="bg-white shadow p-3 rounded-lg">
								<img
									src={logo.image}
									alt={logo.image + i}
									className="w-[50px]"
								/>
							</button>
						))}
					</div>
					<div className="flex gap-5 justify-center mt-6">
						<button className="bg-[#000080] text-white px-4 py-2 rounded w-[35%]">
							Back
						</button>
						<button className="bg-[#000080] w-[35%] text-white px-4 py-2 rounded">
							Next
						</button>
					</div>
				</div>
			</BgSection>
		</>
	);
};

export default PaymentMode;
