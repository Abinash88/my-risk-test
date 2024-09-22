import { ReactNode, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Background from "../../../assets/images/background.png";
import Background2 from "../../../assets/images/auth-image.png";
import { ArrowLeft, ArrowRight } from "lucide-react";

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
  const [opac, setOpac] = useState(0);
  const changeNavbarColor = () => {
    if (window.scrollY >= 600) {
      setOpac(window.scrollY);
    } else {
      setOpac(window.scrollY);
    }
  };
  const [c, setc] = useState(false);
  window.addEventListener("scroll", changeNavbarColor);
  const dynamic = (100 - (opac / 13) * 2) / 100;
  const buttonx = scrollY === 0 ? dynamic : dynamic - 0.5;

  useEffect(() => {
    if (window.innerWidth < 1000) {
      const interval = setInterval(() => {
        setc((x) => !x);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, []);
  return (
    <>
      {/* <h1 className="text-red-300 fixed">{String(dynamic)}</h1> */}
      <div className="relative w-full h-screen z-10 flex flex-row justify-between ">
        <div
          onClick={() => {
            setc((x) => !x);
          }}
          style={{ opacity: buttonx }}
          className="rounded-full hidden md:flex  bg-white md:mt-[50vh] md:ml-24  p-2 h-fit"
        >
          <ArrowLeft className="text-[#000080] scale-75" />
        </div>
        {showLink && (
          <div className="fixed flex justify-center w-full bottom-0 mb-[15vh] md:mb-24">
            <Link
              style={{ opacity: buttonx }}
              to={path}
              className="bg-[#000080] relative text-white bottom-0 items-center  py-4 px-10 rounded-lg "
            >
              Get Started
            </Link>
          </div>
        )}
        <div
          onClick={() => {
            setc((x) => !x);
            console.log(c);
          }}
          style={{ opacity: buttonx }}
          className="rounded-full hidden md:flex bg-white md:mt-[50vh] md:mr-24  p-2 h-fit"
        >
          <ArrowRight className="text-[#000080] scale-75" />
        </div>
      </div>
      <div
        className="fixed -z-10 top-0 w-full ease-in-out duration-500 h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${c ? Background2 : Background})` }}
      >
        <div className="absolute -z-10 lg:pt-20 inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center gap-3 text-white text-center p-6">
          <div className="flex w-full justify-center flex-row">
            <h1
              style={{ opacity: dynamic }}
              className="text-white text-4xl mb-6 tracking-wide  lg:text-7xl lg:scale-110 md:text-[80px] font-bold w-full lg:w-[60%]"
            >
              {title}
            </h1>
          </div>
          <p
            style={{ opacity: dynamic }}
            className="text-[17px] md:text-[18px] font-[400]"
          >
            {c
              ? "Have a part in our T & O Engagements for your private groups."
              : text}
          </p>
        </div>
      </div>
    </>
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
}

export const RegContainer = ({ children, bar }: RegContainerProps) => {
  return (
    <div className="sm-[100%] md:[60%] lg:w-[40%] scale-75 mr-auto ml-auto mt-[-50px]">
      <div>{bar}</div>
      <div className="bg-white rounded-lg h-auto p-12">{children}</div>
    </div>
  );
};
