import AddNew from "./AddNew";
import SubscriptionPlan from "./SubscriptionPlans";

const index = () => {
  return (
    <div className="flex flex-col bg-white rounded-lg mt-5">
      <div className="w-full flex items-center p-5">
        <p className="text-xl text-medium text-black">4 Pages</p>

        <div className="flex ml-auto">
          <AddNew />
        </div>
      </div>
      <div className="px-3 pb-3 scale-90">
        <SubscriptionPlan />
      </div>
    </div>
  );
};

export default index;
