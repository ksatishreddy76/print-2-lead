import React from "react";
import SectionTitle from "../../../commons/SectionTitle";
import PofileImage from "../../../assets/satish.png";
import useTheme from "../../../hooks/use-theme";
import RevealOnScroll from "../../../commons/RevealOnScroll";

const Experience = () => {
  const { currentTheme } = useTheme();
  const experienceData = [
    {
      role: "Frontend Developer",
      company: "Proounce Solution Pvt. Ltd.",
      duration: "2023-Present",
      performedTasks: [
        "I worked on creating financial data tables and analytics modules with Single-SPA apps hosted across different servers.",
        "Developed Shared Utilities and Common Components which can be used across all the applications.",
        "Collaborated with backend teams to integrate REST APIs and handle dynamic data rendering.",
        "Enhanced UI performance and reduced build load times through code splitting and React optimization techniques.",
        "Created a support app where we can create, reject, resolve the tickets.",
      ],
      technologies: [
        "HTML",
        "CSS",
        "JS",
        "Bootstrap",
        "Tailwind CSS",
        "React",
        "Redux",
        "Material UI",
        "Single SPA React",
        "Photoshop",
        "Adobe Illustrator",
      ],
    },
    {
      role: "UI Developer",
      company: "Hypersoft Technologies Ltd.",
      duration: "2022-2023",
      performedTasks: [
        "Developed responsive, data-driven UIs for real-time comparison of stock prices and market trends.",
        "Created reusable UI components.",
        "Collaborated with backend teams to integrate REST APIs and handle dynamic data rendering.",
      ],
      technologies: [
        "HTML",
        "CSS",
        "JS",
        "Bootstrap",
        "Tailwind CSS",
        "React",
        "Redux",
        "Photoshop",
      ],
    },
    {
      role: "Jr. UI Developer / Intern",
      company: "Sri Sai Jyothi Digitals",
      duration: "2021-2022",
      performedTasks: [
        "Manage website development projects from initial design through completing and optimizing the website.",
        "Developed responsive websites using HTML, CSS, Javascript.",
        "Created Templates using Photoshop.",
      ],
      technologies: [
        "HTML",
        "CSS",
        "JS",
        "Bootstrap",
        "React (Basics)",
        "Photoshop",
      ],
    },
  ];

  return (
    <div className="w-full">
      <div className="container mx-auto text-center px-8">
        <div className="">
          <SectionTitle>Experience</SectionTitle>
          <p className="text-xl font-semibold mb-6 leading-8 mt-5">
            My professional journey in software development
          </p>
        </div>
        <div className="max-w-[900px] mx-auto mt-12">
          {(experienceData || []).map((item, index) => {
            return (
              <RevealOnScroll
                direction={index % 2 ? "left" : "right"}
                className={`bg-white/5 backdrop-blur-sm mb-8 border-primary hover:scale-[1.01] rounded-xl md:rounded-2xl p-4 md:p-8 ${currentTheme === "dark" ? "hover:bg-white/10" : "hover:bg-gray-50"} transition-all duration-300 relative overflow-hidden h-full flex flex-col`}
              >
                <h3 className="mb-2 port-txt-gradient text-left text-3xl">
                  {item.role || ""}
                </h3>
                <div className=" mb-3 flex items-center port-secondary-txt-gradient justify-between">
                  <h4 className="text-xl font-semibold  leading-8 mb-0">
                    {item.company || ""}
                  </h4>
                  <span className="text">{item.duration || ""}</span>
                </div>
                <div>
                  <ul>
                    {(item.performedTasks || []).map((item) => {
                      return (
                        <li className="flex items-start gap-4 mb-2 text-justify">
                          <span className="p-1 port-gradient-btn rounded-full mt-2"></span>{" "}
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
