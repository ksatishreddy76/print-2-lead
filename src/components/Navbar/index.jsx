import React from "react";
import Print2LeadLogo from "../../assets/print2lead_logo.svg";
import Menu from "./components/menu";
import Contact from "./components/contact";

const Navbar = () => {
  return (
    <div className="w-full p-3 border-b border-gray-300">
      <div className="container mx-auto flex items-center justify-between">
        <div className="w-48">
          <img className="w-full" src={Print2LeadLogo} alt="" />
        </div>
        <Menu />
        <Contact />
      </div>
    </div>
  );
};

export default Navbar;
