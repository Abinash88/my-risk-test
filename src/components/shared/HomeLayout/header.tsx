import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LoggedMenu from "../LoggedLayout/Menu";
import MobileNav from "./mobile-nav";

const Header = () => {
  const location = useLocation();

  const [colorChange, setColorchange] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 200) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  const isPolicyPage =
    location?.pathname.endsWith("privacy-policy") ||
    location?.pathname.endsWith("cookie-policy") ||
    location?.pathname.endsWith("terms-and-conditions");

  return (
    <div
      className="fixed z-20 ease-in-out duration-300  bg-transparent px-[2rem] lg:px-[4rem] py-[1rem] flex justify-between items-center gap-4 w-full "
      style={{
        backgroundColor: isPolicyPage || colorChange ? "white" : "transparent",
      }}
    >
      <div className="flex gap-7 items-center">
        <MobileNav colorChange={colorChange} />
        <Link to="/">
          <div className="ease-in-out duration-1000 ">
            {isPolicyPage ? (
              <img
                src="images/logo-removebg.png"
                alt="logo"
                className="w-[9rem] md:w-[11rem]"
              />
            ) : colorChange ? (
              <img
                src="images/logo-removebg.png"
                alt="logo"
                className="w-[9rem] md:w-[11rem]"
              />
            ) : (
              <img
                src="images/auth-logo.png"
                alt="logo"
                className="w-[10rem] md:w-[12rem]"
              />
            )}
          </div>
        </Link>
      </div>

      <div
        // style={{ color: colorChange ? "black" : "white" }}
        className=" font-medium hidden md:flex items-start justify-center gap-6 lg:gap-14 flex-[2] "
      >
        <LoggedMenu
          color={isPolicyPage || colorChange ? "white" : "transparent"}
        />
      </div>

      <div className="">
        <Link
          to="/auth/login"
          className="bg-[#000080] hover:bg-[#000080]/80  text-white py-3 px-8 md:text-sm text-xs md:px-12 rounded-xl"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Header;
