import React from "react";
import { Menu, Dropdown } from "antd";
import { Link } from "react-router-dom";
import { navItems, NavItemsType } from "../../../lib/const/navigation";
import { cn } from "@/lib/utils";

const generateMenu = (items: NavItemsType[], color?: string | undefined) => {
  return items.map((item: NavItemsType) => {
    if (item.child && item.child.length > 0) {
      const submenu = (
        <Menu className="mx-2">
          {item.child.map((subItem) => (
            <Menu.Item key={subItem.id} className="my-2 py-2">
              <Link
                to={subItem.path}
                className={cn(
                  `${color == "transparent" ? `text-white` : "text-black"}`,
                  "font-medium text-xs"
                )}
              >
                {subItem.text}
              </Link>
            </Menu.Item>
          ))}
        </Menu>
      );
      return (
        <Dropdown key={item.id} overlay={submenu} className="mx-2">
          <a
            className={`${
              color == "transparent" ? "text-white" : "text-black"
            }`}
            onClick={(e) => e.preventDefault()}
          >
            {item.text}
          </a>
        </Dropdown>
      );
    } else {
      return (
        <Menu.Item key={item.id} className="mx-2">
          <Link
            to={item.path}
            style={{ color: color === "transparent" ? "white" : "black" }}
          >
            {item.text}
          </Link>
        </Menu.Item>
      );
    }
  });
};

const LoggedMenu = ({ color }: { color?: string }) => {
  return (
    <div>
      <Menu
        mode="horizontal"
        className={cn(`${color ? `bg-${color}` : "white"}`, "space-x-8")}
      >
        {generateMenu(navItems, color)}
      </Menu>
    </div>
  );
};

export default LoggedMenu;
