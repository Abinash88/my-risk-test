import SubscriptionPlan from "@/components/Dashboard/Subscription/SubscriptionPlans";
import Container from "@/components/shared/HomeLayout/container";

const SusbscribeSection = () => {
  return (
    <div className="my-20 -mb-10 pb-10">
      <Container>
        <div className="w-full md:w-[55%] mr-auto ml-auto text-center mb-8">
          <h3 className="font-[600] text-black text-[25px] mb-2">
            Subscription Available
          </h3>
          <p className="text-[rgba(0,0,0,0.6)]">
            Unlock unlimited access to premium content with our subscription
            service, providing you with exclusive perks and features tailored to
            your interests
          </p>
        </div>
        <SubscriptionPlan />
      </Container>
    </div>
  );
};

export default SusbscribeSection;
