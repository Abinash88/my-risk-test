import { useLocation } from "react-router-dom";
import FAQComponent from "./faq";
import Popular from "./Popular";

const CenterDetails = () => {
	const location = useLocation();
	const pathname = location.pathname;

	// Extract the last segment
	const lastSegment = pathname
		.split("/")
		.filter((segment) => segment)
		.pop();

	// Replace URL-encoded characters
	const formattedSegment = lastSegment?.replace(/%20/g, " ");
	return (
		<div>
			<h3 className="font-[600] text-black text-[19px]">Help Center</h3>
			<h2 className="font-[600] text-black text-[26px] mt-6">
				{formattedSegment}
			</h2>
			<div className="mt-5 bg-white rounded-md px-4 md:px-9 py-9 h-auto overflow-y-auto scrollBar">
				<h5 className="font-[600] text-black text-[20px] mb-3">
					Common Questions
				</h5>
				<FAQComponent />
			</div>
			<Popular />
		</div>
	);
};

export default CenterDetails;
