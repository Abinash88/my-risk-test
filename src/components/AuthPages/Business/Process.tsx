import ClipLoader from "react-spinners/ClipLoader";
const Process = () => {
	return (
		<div>
			<ClipLoader
				size={80}
				color="#6666B3"
				cssOverride={{ borderWidth: "5px" }}
			/>
			<h4 className="text-[17px] text-[rgba(0,0,0,0.7)] mt-6">
				Registration Request is been{" "}
				<span className="font-[600] text-[#000080]">processed,</span> check your
				email for request status
			</h4>
			<span className="block text-[rgba(102,102,179,1)] text-[12px] mt-5">
				{" "}
				Terms and condition, privacy policy, cookie policy
			</span>
		</div>
	);
};

export default Process;
