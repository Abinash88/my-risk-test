import SubscriptionPlan from "@/components/Dashboard/Subscription/SubscriptionPlans";
import Container from "@/components/shared/HomeLayout/container";

const ProductSubscription = () => {
  return (
    <div className="my-20">
      <Container>
        <div className="text-black text-center w-full md:w-[50%] mr-auto ml-auto">
          <h2 className="font-[600] text-[38px] mb-2">
            Subscription Available
          </h2>
          <p className="text-[rgba(0,0,0,0.7)]">
            Unlock unlimited access to premium content with our subscription
            service, providing you with exclusive perks and features tailored to
            your interests
          </p>
        </div>
        <div className="mt-14">
          <SubscriptionPlan />
        </div>
      </Container>
    </div>
  );
};

export default ProductSubscription;
