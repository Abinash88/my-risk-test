import { navItems } from "@/lib/const/navigation";
import { Link } from "react-router-dom";

const ResourcesDropdown = () => {
  return (
    <div className="p-4 grid grid-cols-2 border rounded-xl shadow-lg">
      {navItems?.map((item) => {
        return (
          <div className="" key={item?.path}>
            <h3 className="md:text-lg font-medium  py-2 ">
              {item?.text}
            </h3>
            <div className="flex flex-col gap">
              {item?.child?.map((link) => (
                <Link
                style={{letterSpacing:"0.5px"}}
                  to={link?.path}
                  className="py-1 font-normal md:text-sm text-xs"
                  key={link?.path}
                >
                  {link?.text}
                </Link>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ResourcesDropdown;
