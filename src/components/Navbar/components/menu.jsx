import React from "react";
import { Link, useLocation } from "react-router-dom";

const Menu = () => {
  const windowWidth = window.innerWidth;

  const location = useLocation();

  const menus = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  // if (windowWidth < 1024) {
  return (
    <ul className="flex items-center gap-6">
      {menus.map((menu, idx) => (
        <li key={`menu-${idx}`}>
          <Link
            className={`hover:text-orange-600 ${location.pathname === menu.path ? "text-orange-600 font-semibold" : ""}`}
            to={menu.path}
          >
            {menu.name || ""}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
