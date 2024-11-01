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
} from "@/components/ui/carousel2";

const PremiumPlan = () => {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem className="basis-full]">
          <FreePlan />
        </CarouselItem>
        <CarouselItem className="basis-full lg:basis-[46%]">
          <StandardPkg />
        </CarouselItem>
        <CarouselItem className="basis-full lg:basis-[46%]">
          <PremiumPkg />
        </CarouselItem>
        <CarouselItem className="basis-full lg:basis-[46%]">
          <GoldPkg />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="bg-blue-800 text-white ml-5 h-10 w-10">
        x
      </CarouselPrevious>
      <CarouselNext className="bg-blue-800 text-white mr-5 h-10 w-10" />
    </Carousel>
  );
};

export default PremiumPlan;
