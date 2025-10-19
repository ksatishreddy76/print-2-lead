import { Link } from "react-router-dom";
import Print2LeadLogo from "../../assets/print2lead_logo.svg";
import Contact from "./components/contact";
import Menu from "./components/menu";

const Navbar = () => {
  return (
    <div className="w-full p-3 border-b border-gray-300 ">
      <div className="container mx-auto flex items-center justify-between">
        <div className="w-48">
          <Link to="/">
            <img className="w-full" src={Print2LeadLogo} alt="" />
          </Link>
        </div>
        <Menu />
        <Contact />
      </div>
    </div>
  );
};

export default Navbar;
