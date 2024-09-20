import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { navItems } from "../../../lib/const/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const navigate = useNavigate();
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 600) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <div
      className="fixed z-10 ease-in-out duration-300  bg-transparent px-[2rem] lg:px-[4rem] py-[1rem] flex justify-between items-center gap-4 w-full "
      style={{ backgroundColor: colorChange ? "white" : "transparent" }}
    >
      <Link to="/">
        <div className="ease-in-out duration-1000 ">
          {colorChange ? (
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

      <ul
        style={{ color: colorChange ? "black" : "white" }}
        className=" font-medium hidden md:flex items-center justify-center gap-6 lg:gap-8 flex-[2] "
      >
        {navItems.map((item) => (
          <li key={item.id}>
            <Link to={item.path}>{item.text}</Link>
          </li>
        ))}
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        <FontAwesomeIcon
          icon={faBars}
          className="text-xl text-white shadow-lg"
          style={{ color: colorChange ? "black" : "white" }}
        />
      </div>
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[100%] h-full bg-[#fff] ease-in-out duration-500 z-50"
            : "ease-in-out w-[100%] duration-500 fixed top-0 bottom-0 left-[-100%] z-50"
        }
      >
        {/* Mobile Logo */}
        <div className="flex justify-between">
          <img
            src="images/logo.png"
            alt="logo"
            className="w-[10rem] mt-8 ml-4 mb-6"
          />
          <div onClick={handleNav} className="block md:hidden">
            <FontAwesomeIcon
              icon={faXmark}
              className="text-[2rem] text-black z-10 mr-6 mt-8"
            />
          </div>
        </div>

        {/* Mobile Navigation Items */}

        <div className="flex gap-6 flex-col mt-6">
          {navItems.map((item) => (
            <li
              key={item.id}
              className=" w-[100vw]  py-2 px-4  duration-300 hover:text-white"
            >
              <div className="py-3 border hover:bg-[#000080] hover:bg-opacity-80 rounded-2xl shadow-sm px-6 flex flex-row justify-between">
                <div
                  className="tracking-wide "
                  onClick={() => {
                    handleNav();
                    navigate(item.path);
                  }}
                >
                  {item.text}
                </div>
                {item.text === "Learn" && (
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    className="text-[1rem] "
                  />
                )}
                {item.text === "Product" && (
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    className="text-[1rem] "
                  />
                )}
              </div>
            </li>
          ))}
        </div>
        <div className="flex flex-col w-[100%] mt-56 items-center justify-end">
          <li className="bg-[#000080] text-center text-white ml-4 p-4 mt-4 w-[80%] rounded-full">
            Login
          </li>
          <li className="text-[#000080] border bg-white shadow-lg text-center ml-4 p-4 mt-4 w-[80%] rounded-full">
            Register
          </li>
        </div>
      </ul>
      <div className="hidden md:block">
        <Link
          to="/login"
          className="bg-[#000080] text-white py-3 px-10 rounded-lg"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Header;
