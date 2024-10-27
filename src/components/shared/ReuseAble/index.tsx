import { ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import Background from "../../../assets/images/background.png";
import { cn } from "@/lib/utils";

interface BlogProps {
  title: string;
  text: string;
  path: string;
  showLink?: boolean;
}

export const BlogHeader = ({
  title,
  text,
  path,
  showLink = true,
}: BlogProps) => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="absolute lg:pt-20 inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center gap-3 text-white text-center p-6">
        <h1 className="text-white text-4xl mb-6 tracking-wide  lg:text-7xl lg:scale-110 md:text-[80px] font-bold w-full lg:w-[60%]">
          {title}
        </h1>
        <p className="text-[17px] md:text-[18px] font-[400]">{text}</p>
        {showLink && (
          <Link to={path} className="bg-[#000080] py-4 px-10 rounded-lg mt-10">
            Get Started
          </Link>
        )}
      </div>
    </div>
  );
};

interface TruncatedTextProps {
  text: string;
  maxLength: number;
  title: string;
}
export const TruncatedText = ({
  text,
  title,
  maxLength = 100,
}: TruncatedTextProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  if (text.length <= maxLength) {
    return <p className="font-[500] text-[18px] text-black">{text}</p>; // No need to truncate if text is short
  }

  return (
    <div>
      <p className="font-[500] text-[14px] text-black leading-[23.44px]">
        <span className="font-[600] text-[18px] text-black leading-[23.44px]">
          {title}{" "}
        </span>
        {isExpanded ? text : `${text.slice(0, maxLength)}...`}
        <span onClick={toggleText} className="text-blue-500 cursor-pointer">
          {isExpanded ? "...Show less" : "Show more"}
        </span>
      </p>
    </div>
  );
};

interface BgSectionProps {
  image: string;
  children: ReactNode;
}
export const BgSection = ({ image, children }: BgSectionProps) => {
  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('${image}')` }}
    >
      <div className="relative inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center gap-3 text-white text-center p-6 min-h-screen">
        {children}
      </div>
    </div>
  );
};

interface RegContainerProps {
  children: ReactNode;
  bar?: ReactNode;
  className?: string;
}

export const RegContainer = ({
  children,
  bar,
  className,
}: RegContainerProps) => {
  return (
    <div
      className={cn(
        `w-[90%] md:[60%] lg:w-[35%] scale-90 mx-auto mt-[-50px]`,
        className
      )}
    >
      <div>{bar}</div>
      <div className="bg-white rounded-lg h-auto p-12">{children}</div>
    </div>
  );
};
