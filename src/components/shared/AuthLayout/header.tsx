import { Link } from "react-router-dom";

const Authheader = () => {
  return (
    <div className="flex items-center flex-col w-full  justify-center ">
      <Link to="/">
        <img
          src="/images/logo-png-icon.png"
          alt="logo"
          className="w-[4rem] lg:w-[80px]"
        />
      </Link>
      <Link to="/">
        <img
          src="/images/logo-text.png"
          alt="logo"
          className="w-[9rem] lg:w-[250px]"
        />
      </Link>
    </div>
  );
};

export default Authheader;
