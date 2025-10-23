import React, { useState, useRef, useEffect } from "react";
import {
  Home,
  User,
  CircleStar,
  Code,
  FolderKanban,
  Mail,
  Menu,
} from "lucide-react";
import RevealOnScroll from "../../../commons/RevealOnScroll";
import useCurrentScreen from "../../../hooks/use-current-screen";

const Navbar = () => {
  const { isLaptop } = useCurrentScreen();
  const [openMenu, setOpenMenu] = useState(false);

  const menuRef = useRef();

  const iconSize = 18;
  const menu = [
    { name: "Home", icon: <Home size={iconSize} /> },
    { name: "About", icon: <User size={iconSize} /> },
    { name: "Skills", icon: <CircleStar size={iconSize} /> },
    { name: "Projects", icon: <Code size={iconSize} /> },
    { name: "Portfolio", icon: <FolderKanban size={iconSize} /> },
    { name: "Contact", icon: <Mail size={iconSize} /> },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenu(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="p-3 border-b-primary">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <RevealOnScroll direction="left" className="flex items-center gap-3">
            <div className=" text-xl animate-bounce port-gradient-bg rounded-full p-2">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 640 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"></path>
              </svg>
            </div>
            <div>
              <div className="text-2xl font-semibold">Kolanu Satish Reddy</div>
              <div className="text-xs">Frontend React JS Developer</div>
            </div>
          </RevealOnScroll>
          <RevealOnScroll
            direction="right"
            className="secondary-bg border-primary rounded-full p-2 flex items-center justify-center"
          >
            {isLaptop ? (
              <>
                <div className="relative" ref={menuRef}>
                  <Menu
                    onClick={() => {
                      setOpenMenu(!openMenu);
                    }}
                  />
                  <div
                    className={`absolute top-9 right-0 flex items-center justify-center scale-0 origin-top opacity-0 none transition-all duration-300 ${openMenu ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
                  >
                    <ul className="flex flex-col gap-3 p-4 primary-bg rounded-lg shadow-lg">
                      {menu.map((item, idx) => (
                        <li
                          key={`port-menu-${idx}`}
                          className="secondary-bg p-2 px-4 menu-list-hover-bg text-xl cursor-pointer rounded-full tranistion-all duration-300 group"
                        >
                          <div className="flex items-center gap-2 text-sm group-hover:scale-105 transition-all duration-300">
                            {item.icon}
                            {item.name}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex items-center justify-center text-gray-300">
                <ul className="flex">
                  {menu.map((item, idx) => (
                    <li
                      key={`port-menu-${idx}`}
                      className="primary-bg px-3 py-2 mx-1 menu-list-hover-bg text-xl cursor-pointer rounded-full tranistion-all duration-300 group"
                    >
                      <div className="flex items-center gap-2 text-sm group-hover:scale-105 transition-all duration-300">
                        {item.icon}
                        {item.name}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </RevealOnScroll>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
