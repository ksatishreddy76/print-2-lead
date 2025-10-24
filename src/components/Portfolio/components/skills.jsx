import React from "react";
import SectionTitle from "../../../commons/SectionTitle";
import PofileImage from "../../../assets/satish.png";
import useTheme from "../../../hooks/use-theme";
import HTMLIcon from "../../../assets/skills/html.svg";
import CSSIcon from "../../../assets/skills/css.svg";
import JSIcon from "../../../assets/skills/js.svg";
import BootstrapIcon from "../../../assets/skills/bootstrap.svg";
import ReactIcon from "../../../assets/skills/react.svg";
import ReduxIcon from "../../../assets/skills/redux.svg";
import TailwindCSSIcon from "../../../assets/skills/tailwind.svg";
import MaterialUIIcon from "../../../assets/skills/material-ui.svg";
import NodejsIcon from "../../../assets/skills/nodejs.svg";
import MongoDBIcon from "../../../assets/skills/mongo.svg";
import PhotoshopIcon from "../../../assets/skills/photoshop.svg";
import CorelDrawIcon from "../../../assets/skills/corel-draw.svg";
import AdobeIllustratorIcon from "../../../assets/skills/adobe-illustrator.svg";

const Skills = () => {
  const { currentTheme } = useTheme();

  const tools = [
    {
      className:
        "absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300",
      icon: HTMLIcon,
      title: "HTML",
    },
    {
      className:
        "absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300",
      icon: CSSIcon,
      title: "CSS",
    },
    {
      className:
        "absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300",
      icon: JSIcon,
      title: "Javascript",
    },
    {
      className:
        "absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300",
      icon: BootstrapIcon,
      title: "Bootstrap",
    },
    {
      className:
        "absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300",
      icon: ReactIcon,
      title: "React",
    },
    {
      className:
        "absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300",
      icon: ReduxIcon,
      title: "Redux",
    },
    {
      className:
        "absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300",
      icon: TailwindCSSIcon,
      title: "Tailwind CSS",
    },
    {
      className:
        "absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300",
      icon: MaterialUIIcon,
      title: "Material UI",
    },
    {
      className:
        "absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300",
      icon: NodejsIcon,
      title: "Node JS",
    },
    {
      className:
        "absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300",
      icon: MongoDBIcon,
      title: "Mongo DB",
    },
    {
      className:
        "absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300",
      icon: PhotoshopIcon,
      title: "Photoshop",
    },
    // {
    //   className:
    //     "absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300",
    //   icon: CorelDrawIcon,
    //   title: "Corel Draw",
    // },
    {
      className:
        "absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300",
      icon: AdobeIllustratorIcon,
      title: "Adobe Illustrator",
    },
  ];

  return (
    <div className="w-full">
      <div className="container mx-auto text-center px-8">
        <div className="">
          <SectionTitle>Skills & Technologies</SectionTitle>
          <p className="text-xl font-semibold mb-6 leading-8 mt-5">
            Here are the tools I used during development
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 items-center justify-center gap-6 mt-8">
          {(tools || []).map((item) => {
            return (
              <div className="border-primary hover:scale-[1.03] group bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg transition-all duration-300 relative overflow-hidden flex flex-col items-center justify-center py-4">
                <div className={item.className}></div>
                <img
                  className="max-w-12 group-hover:rotate-[360deg] transition-all duration-500"
                  src={item.icon}
                  alt=""
                />
                <p className="text-base font-semibold mt-3 ">{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
