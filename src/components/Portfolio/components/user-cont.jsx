import React from "react";
import CustomButton from "../../../commons/CustomButton";
import { Linkedin, Github, Twitter } from "lucide-react";
import RevealOnScroll from "../../../commons/RevealOnScroll";

const UserContent = () => {
  const iconSize = 22;
  const socialLinks = [
    {
      href: "https://github.com/ksatishreddy76",
      icon: <Github size={iconSize} />,
    },
    {
      href: "https://www.linkedin.com/in/satish-reddy-90870b233/",
      icon: <Linkedin size={iconSize} />,
    },
    {
      href: "https://www.linkedin.com/in/satish-reddy-90870b233/",
      icon: <Twitter size={iconSize} />,
    },
  ];

  return (
    <div className="w-full">
      <div className="container mx-auto px-4 py-10 flex flex-col items-center min-h-[70vh]">
        <div className="flex items-center flex-col justify-center text-center">
          <CustomButton variant="outlined">Welcome to My Universe</CustomButton>
          <RevealOnScroll
            direction="left"
            className="text-6xl port-secondary-txt-gradient font-bold mt-6 "
          >
            Frontend{" "}
          </RevealOnScroll>
          <RevealOnScroll
            direction="left"
            delay={500}
            className="text-6xl port-txt-gradient font-bold mt-3 mb-4"
          >
            React JS Developer{" "}
          </RevealOnScroll>

          <RevealOnScroll
            direction="left"
            delay={1000}
            className="text-xl font-semibold mb-6 leading-8 max-w-[800px]"
          >
            React JS Frontend Developer with 4 years of experience developing
            financial dashboards and data-driven platforms. Proficient in HTML5,
            CSS3, JavaScript, React, and Microfrontend solutions using
            Single-spa.
          </RevealOnScroll>
          <div className="flex flex-col md:flex-row items-center gap-2">
            <CustomButton variant="gradient">Explore My Universe</CustomButton>
            <CustomButton variant="filled">Download Universe</CustomButton>
          </div>
          <div className="text-sm animate-pulse mt-5 port-secondary-txt-gradient    ">
            Scroll to explore more
          </div>
          <RevealOnScroll
            direction="top"
            className="port-outlined-btn p-2 border-primary mt-6 rounded-full "
          >
            <ul className="flex items-center ">
              {socialLinks.map((link, idx) => (
                <li
                  className="mx-2 menu-list-hover-bg rounded-full p-2"
                  key={`social-link-${idx}`}
                >
                  <a href={link.href} target="_blank" rel="noreferrer">
                    {link.icon}
                  </a>
                </li>
              ))}
            </ul>
          </RevealOnScroll>
        </div>
      </div>
    </div>
  );
};

export default UserContent;
