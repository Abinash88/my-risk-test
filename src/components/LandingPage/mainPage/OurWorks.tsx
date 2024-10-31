import Container from "@/components/shared/HomeLayout/container";
import { BlogHeader } from "@/components/shared/ReuseAble";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

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
  const [history, setHistory] = useState(false);
  return (
    <div>
      <BlogHeader
        title="How It Works"
        text="See How it works in 3 EASY STEPS"
        showLink={false}
        path="/"
      />
      <Container>
        <div className="flex flex-row w-full mt-9 justify-center">
          <button
            onClick={() => setHistory(false)}
            className={
              history
                ? "font-[600] rounded-full scale-90 md:scale-75 text-blue-900 bg-white w-[50%] text-center text-xs md:text-lg mb-5 border shadow-lg py-2"
                : "font-[600] rounded-full scale-90 md:scale-75 bg-blue-900 text-white w-[50%] text-center text-xs md:text-lg mb-5 shadow-lg border py-2"
            }
          >
            Business Sign-up
          </button>
          <button
            onClick={() => setHistory(true)}
            className={
              !history
                ? "font-[600] rounded-full scale-90 md:scale-75 text-blue-900 bg-white w-[50%] md:w-[50%] text-center text-xs md:text-lg mb-5 border shadow-lg py-2"
                : "font-[600] rounded-full scale-90 md:scale-75 bg-blue-900 text-white w-[50%] md:w-[50%] text-center text-xs md:text-lg mb-5 shadow-lg border py-2"
            }
          >
            Professional Sign-up
          </button>
        </div>
        <div className="flex flex-row justify-center items-center gap-8 my-16 flex-wrap md:flex-nowrap">
          <div className="rounded-full hidden md:flex opacity-80 bg-[#000080]  p-2 h-fit">
            <ArrowLeft className="text-white scale-75" />
          </div>
          {steps.map((step, i) => (
            <div
              key={i}
              className="w-[100%] md:w-[28%] bg-white shadow-lg p-6 text-center flex flex-col items-center rounded-lg gap-y-5"
            >
              <img src="/images/ai-icon.png" alt="ai-icon" />
              <h4 className="text-[#000000] font-[600] text-lg">
                {step.title}
              </h4>
              <p className="text-[rgba(0,0,0,0.6)] text-sm">{step.text}</p>
            </div>
          ))}
          <div className="rounded-full hidden md:flex opacity-80 bg-[#000080]  p-2 h-fit">
            <ArrowLeft className="text-white scale-75" />
          </div>
        </div>
        <div className="w-full flex items-center justify-center mb-10">
          <Link
            to={"/auth"}
            className={
              "font-[600] rounded-full bg-blue-900 text-white w-[50%] md:w-[30%] text-center text-xs md:text-lg mb-5 shadow-lg border py-2"
            }
          >
            Create Account
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default OurWorks;
