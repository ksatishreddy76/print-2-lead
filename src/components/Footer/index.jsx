import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="w-full footer-bg flex justify-between">
        <div class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
          <div className="col-span-2 pt-3">
            <p className="font-semibold mb-3">
              You dream it. We print it. You lead with it.
            </p>
            <p className="text-sm">
              <div className="w-fit ">
                Print2Lead — where every print builds your legacy.
                <hr className="border-gray-500 mt-8" />
              </div>
            </p>
          </div>
          <div>
            <p className="font-semibold mb-3 text-base">Contact Us</p>
            <p className="text-sm mb-2">Phone: +91 73863 24298</p>
            <p className="text-sm mb-2">Email: print2lead@gmail.com</p>
          </div>
          <div>
            <p className="font-semibold mb-3 text-base">Our Company</p>
            <ul className="flex flex-col items-start gap-2">
              <li>
                <Link to="/products" className="hover:text-orange-600 text-sm ">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-orange-600 text-sm ">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-orange-600 text-sm ">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-orange-600 text-sm ">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full footer-base flex justify-between items-center">
        <p className="text-sm">
          {" "}
          A printing company © 2010-2025 Print2Lead. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Facebook />
          <Twitter />
          <Linkedin />
          <Instagram />
        </div>
      </div>
    </div>
  );
};

export default Footer;
