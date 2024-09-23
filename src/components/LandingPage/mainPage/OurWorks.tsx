import Container from "@/components/shared/HomeLayout/container";
import { BlogHeader } from "@/components/shared/ReuseAble";

const steps = [
  {
    title: "Create Account",
    text: "Unlock unlimited access to premium content with our subscription service, providing you with exclusive.",
  },
  {
    title: "Choose Package",
    text: "Unlock unlimited access to premium content with our subscription service, providing you with exclusive.",
  },
  {
    title: "Enjoy our Services",
    text: "Unlock unlimited access to premium content with our subscription service, providing you with exclusive.",
  },
];
const OurWorks = () => {
  return (
    <div>
      <BlogHeader
        title="How It Works"
        text="See How it works in 3 EASY STEPS"
        showLink={false}
        path="/"
      />
      <Container>
        <div className="flex justify-center gap-8 my-16 flex-wrap">
          {steps.map((step, i) => (
            <div
              key={i}
              className="w-[100%] md:[33%] lg:w-[28%] bg-white shadow-lg p-6 text-center flex flex-col items-center rounded-lg gap-y-5"
            >
              <img src="/images/ai-icon.png" alt="ai-icon" />
              <h4 className="text-[#000000] font-[600] text-[24px]">
                {step.title}
              </h4>
              <p className="text-[rgba(0,0,0,0.6)] text-[19px]">{step.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default OurWorks;
