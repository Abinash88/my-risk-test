import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { navItems } from "../../../lib/const/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBell, faXmark } from "@fortawesome/free-solid-svg-icons";
import GridSidebar from "./GridSidebar";
import LoggedMenu from "./Menu";

const LoggedHeader = () => {
  const [nav, setNav] = useState(false);
  const [openGrid, setOpenGrid] = useState(false);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [prod, setProd] = useState(false);
  const [learn, setlearn] = useState(false);
  const [support, setSupport] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const navigate = useNavigate();
  return (
    <div className="z-20 lg:overflow-hidden bg-white shadow-sm px-[2rem] lg:h-20 lg:px-[2rem] py-[1rem] flex items-center justify-between gap-4 w-full relative">
      <div>
        <Link to="/">
          <img
            src="/images/logo.png"
            alt="logo"
            className=" w-[8rem] scale-[80%] md:w-[12rem]"
          />
        </Link>
      </div>
      <div className="lg:w-[100%] -ml-8 fixed md:absolute">
        <div className="hidden md:flex items-center justify-center">
        <LoggedMenu/>
        </div>
        {/* <ul className="text-black hidden md:flex items-center justify-center gap-6 lg:gap-8 ">
          {navItems.map((item) => (
            <li key={item.id}>
            <li
              onMouseEnter={() => {
                if (item.text === "Product") {
                  setProd(true);
                  setlearn(false);
                  setSupport(false);
                }
                if (item.text === "Learn") {
                  setSupport(false);
                  setProd(false);
                  setlearn((x) => !x);
                }
                if (item.text === "Support") {
                  setProd(false);
                  setlearn(false);
                  setSupport((x) => !x);
                }
                if (item.text === "T & O Standing") {
                  setProd(false);
                  setlearn(false);
                  setSupport(false);
                }
              }}
              onMouseLeave={() => {
                setProd(false);
                setlearn(false);
                setSupport(false);
              }}
            >
              {item.text}
              {item.text === "Product" && prod && (
                <div className="fixed">
                  <div
                    className={`opacity-80 text-sm font-normal my-1`}
                    onClick={() => {
                      navigate("/service");
                      setNav(false);
                      goToTop();
                    }}
                  >
                    Our services
                  </div>
                  <div className={`opacity-80 text-sm font-normal my-1`}>
                    Premium Features
                  </div>
                  <div className={`opacity-80 text-sm font-normal my-1`}>
                    Subscription Services
                  </div>
                </div>
              )}
              {item.text === "Learn" && learn && (
                <div className="fixed">
                  <div
                    className={`opacity-80 text-sm font-normal my-1`}
                    // onClick={() => {
                    //   navigate("/service");
                    //   setNav(false);
                    //   goToTop();
                    // }}
                  >
                    Risk Management Concept
                  </div>
                  <div className={`opacity-80 text-sm font-normal my-1`}>
                    Integrated AI Services
                  </div>
                </div>
              )}
              {item.text === "Support" && support && (
                <div className="fixed z-10">
                  <div
                    className={`opacity-80 text-sm font-normal my-1`}
                    onClick={() => {
                      navigate("/service");
                      setNav(false);
                      goToTop();
                    }}
                  >
                    Our services
                  </div>
                  <div className={`opacity-80 text-sm font-normal my-1`}>
                    Premium Features
                  </div>
                  <div className={`opacity-80 text-sm font-normal my-1`}>
                    Subscription Services
                  </div>
                </div>
              )}
            </li>
          </li>
          ))}
        </ul> */}
      </div>
      <div className="lg:scale-75 flex">
        <div onClick={handleNav} className="hidden">
          {nav ? (
            <FontAwesomeIcon
              icon={faXmark}
              className="text-[2rem] text-[#000080]"
            />
          ) : (
            <FontAwesomeIcon
              icon={faBars}
              className="text-[2rem] text-[#000080]"
            />
          )}
        </div>
        <ul
          className={
            nav
              ? "fixed md:hidden left-0 top-0 w-[60%] h-full bg-[#fff] ease-in-out duration-500 z-50"
              : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%] z-50"
          }
        >
          {/* Mobile Logo */}
          {/* <Link to="/">
            {" "}
            <img
              src="/images/logo.png"
              alt="logo"
              className="w-56 md:hidden lg:hidden mt-3 ml-4 mb-6"
            />
          </Link> */}

          {/* Mobile Navigation Items */}
          {/* {navItems.map((item) => (
					<li
						key={item.id}
						className="text-black py-2 px-4 hover:bg-[#000080] duration-300 hover:text-white cursor-pointer"
					>
						<Link to={item.path} onClick={handleNav}>
							{item.text}
						</Link>
					</li>
				))} */}
          {/* <li className="bg-[#000080] text-white ml-4 p-4 mt-4 w-[50%] rounded-md">
					Login
				</li> */}
        </ul>
        <div className="flex items-center space-x-5 ml-auto ">
          <div className="relative">
            <FontAwesomeIcon
              icon={faBell}
              className="text-[18px] md:text-[25px] animate-wiggle"
            />
            <div className="px-1 bg-[#AB2626] rounded-full text-center text-white text-[10px] absolute -top-2 -end-1">
              3
              <div className="absolute top-0 start-0 rounded-full -z-10 animate-ping bg-[#AB2626] w-full h-full"></div>
            </div>
          </div>

          <img
            src="/images/grid.png"
            alt="grid"
            className=" w-[19px] md:w-[25px] cursor-pointer"
            onClick={() => setOpenGrid(!openGrid)}
          />
          <div className="flex items-center gap-2">
            <img
              src="/images/profile-image.jpeg"
              alt="profile-image"
              className="rounded-full aspect-square object-cover h-[40px] w-[40px] md:h-[53px] md:w-[53px]"
            />
            <div className="hidden md:flex gap-1  items-center">
              <h3 className="text-[#000080] text-sm font-[600]">
                Uther Martin
              </h3>
              <img src="/images/badge.png" alt="badge" />
            </div>
          </div>
        </div>
      </div>

      {openGrid && <GridSidebar />}
    </div>
  );
};

export default LoggedHeader;
