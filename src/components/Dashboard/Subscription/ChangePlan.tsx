import SubscriptionPlan from "./SubscriptionPlans";

const ChangePlan = () => {
	return (
		<div>
			<h3 className="font-[600] text-[25px] mb-5">Choose Plan</h3>
			<div className="mt-5 bg-white rounded-md px-9 py-9 h-auto overflow-y-auto scrollBar">
				<h4 className="font-[600] text-[25px] mb-5">Change Plan</h4>
				<SubscriptionPlan />
			</div>
		</div>
	);
};

export default ChangePlan;
