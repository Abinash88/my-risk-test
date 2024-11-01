import FreePlan from "./FreePlan";
import GoldPkg from "./GoldPkg";
import PremiumPkg from "./PremiumPkg";
import StandardPkg from "./StandardPkg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const SubscriptionPlan = () => {
  return (
    <div className="md:-mt-20">
      <Carousel>
        <CarouselContent>
          <CarouselItem className="basis-full md:basis-[50%] lg:basis-[33%] ">
            <FreePlan />
          </CarouselItem>
          <CarouselItem className="basis-full md:basis-[50%] lg:basis-[33%]">
            <StandardPkg />
          </CarouselItem>
          <CarouselItem className="basis-full md:basis-[50%] lg:basis-[33%]">
            <PremiumPkg />
          </CarouselItem>
          <CarouselItem className="basis-full md:basis-[50%] lg:basis-[33%]">
            <GoldPkg />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="bg-blue-800 text-white ml-5 h-10 w-10" />
        <CarouselNext className="bg-blue-800 text-white mr-5 h-10 w-10" />
      </Carousel>
    </div>
  );
};

export default SubscriptionPlan;
