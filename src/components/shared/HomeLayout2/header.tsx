import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { navItems } from "../../../lib/const/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import LoggedMenu from "../LoggedLayout/Menu";

const Header = () => {
  const [nav, setNav] = useState(false);
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
    <div
      className="fixed z-20 ease-in-out duration-300  bg-transparent z-50 px-[2rem] lg:px-[4rem] py-[1rem] flex justify-between items-center gap-4 w-full "
      style={{ backgroundColor: "white" }}
    >
      <Link to="/">
        <div className="ease-in-out duration-1000 ">
          <img
            src="/images/logo-removebg.png"
            alt="logo"
            className="w-[10rem] md:w-[12rem]"
          />
        </div>
      </Link>

      <div
        // style={{ color: colorChange ? "black" : "white" }}
        className=" font-medium hidden md:flex items-start justify-center gap-6 lg:gap-14 flex-[2] "
      >
        <LoggedMenu />
      </div>
      <div onClick={handleNav} className="block md:hidden">
        <FontAwesomeIcon
          icon={faBars}
          className="text-xl text-white shadow-lg"
          style={{ color: "black" }}
        />
      </div>
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[100%] h-full bg-[#fff] ease-in-out duration-500 z-50"
            : "ease-in-out w-[100%] opacity-0 duration-500 fixed top-0 bottom-0 left-[-100%] z-50"
        }
      >
        {/* Mobile Logo */}
        <div className="flex justify-between">
          <img
            src="images/logo.png"
            alt="logo"
            className="w-[10rem] mt-8 ml-4 mb-6"
            onClick={() => {
              navigate("/");
              setNav(false);
              goToTop();
            }}
          />
          <div onClick={handleNav} className="block md:hidden">
            <FontAwesomeIcon
              icon={faXmark}
              className="text-[2rem] text-black z-10 mr-6 mt-8"
            />
          </div>
        </div>

        {/* Mobile Navigation Items */}

        <div className="flex gap-3 flex-col mt-6">
          {navItems.map((item) => (
            <div key={item?.id}>
              <li
                key={item.id}
                className=" w-[100vw]  flex items-center justify-center  py-2 px-4 ease-in-out duration-300 hover:text-white"
              >
                <div
                  onClick={() => {
                    if (item.text !== "Product") {
                      setProd(false);
                    } else {
                      setProd((x) => !x);
                      setlearn(false);
                      setSupport(false);
                    }
                    if (item.text === "Learn") {
                      setProd(false);
                      setSupport(false);
                      setlearn((x) => !x);
                    }
                    if (item.text === "Support") {
                      setlearn(false);
                      setProd(false);
                      setSupport((x) => !x);
                    }
                    if (item.text === "T & O Standing") {
                      navigate("/map");
                    }
                  }}
                  className="py-2 mr-4 w-[85vw] border hover:bg-[#000080] hover:bg-opacity-80 rounded-2xl shadow-sm px-6 flex flex-row justify-between"
                >
                  <div
                    className="tracking-wide text-sm"
                    onClick={() => {
                      // handleNav();
                      // navigate(item.path);
                    }}
                  >
                    {item.text}
                  </div>
                  {item.text === "Product" && (
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      className={`text-[1rem] duration-300 ${
                        prod ? " rotate-180" : " rotate-0"
                      }`}
                    />
                  )}
                  {item.text === "Learn" && (
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      className={`text-[1rem] duration-300 ${
                        learn ? " rotate-180" : " rotate-0"
                      }`}
                    />
                  )}
                  {item.text === "Support" && (
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      className={`text-[1rem] duration-300 ${
                        support ? " rotate-180" : " rotate-0"
                      }`}
                    />
                  )}
                </div>
              </li>
              <div
                // onMouseLeave={() => {
                //   setProd(false);
                // }}
                className="opacity-70 text-sm flex ease-in-out duration-300 flex-col w-full  items-start ml-14 space-y-4 mt-2 justify-center"
              >
                {prod && item.text === "Product" && (
                  <>
                    <div
                      className={`text-[#000080]`}
                      onClick={() => {
                        navigate("/service");
                        setNav(false);
                        goToTop();
                      }}
                    >
                      Our services
                    </div>
                    <div
                      className="text-[#000080]"
                      onClick={() => {
                        navigate("/premium");
                        setNav(false);
                        goToTop();
                      }}
                    >
                      Premium Features
                    </div>
                    <div
                      className="text-[#000080]"
                      onClick={() => {
                        navigate("/product-subscription");
                        setNav(false);
                        goToTop();
                      }}
                    >
                      Subscription Services
                    </div>
                  </>
                )}
                {learn && item.text === "Learn" && (
                  <>
                    <div
                      className={`text-[#000080]`}
                      onClick={() => {
                        navigate("/risk-management");
                        setNav(false);
                        goToTop();
                      }}
                    >
                      Risk Management Concept
                    </div>
                    <div
                      className="text-[#000080]"
                      onClick={() => {
                        navigate("/integrated-service");
                        setNav(false);
                        goToTop();
                      }}
                    >
                      Integrated AI Services
                    </div>
                  </>
                )}
                {support && item.text === "Support" && (
                  <>
                    <div
                      className={`text-[#000080]`}
                      onClick={() => {
                        navigate("/our-work");
                        setNav(false);
                        goToTop();
                      }}
                    >
                      How it works
                    </div>
                    <div className="text-[#000080]">Help Centre</div>
                    <div className="text-[#000080]">User Tips</div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="flex  flex-col w-[100%] mt-32 items-center justify-center">
          <li className="bg-[#000080] scale-90 text-center text-white p-4 mt-4 w-[80%] rounded-full">
            Login
          </li>
          <li className="text-[#000080] scale-90 border bg-white shadow-lg text-center p-4 mt-4 w-[80%] rounded-full">
            Register
          </li>
        </div>
      </ul>
      <div className="hidden md:block">
        <Link
          to="/auth/login"
          className="bg-[#000080] text-white py-3 px-10 rounded-lg"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Header;
