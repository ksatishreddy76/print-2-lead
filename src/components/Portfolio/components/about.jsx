import React from "react";
import SectionTitle from "../../../commons/SectionTitle";
import PofileImage from "../../../assets/satish.png";
import RevealOnScroll from "../../../commons/RevealOnScroll";

const About = () => {
  return (
    <div className="w-full ">
      <div className="container mx-auto text-center px-8">
        <div className="">
          <SectionTitle>About Me</SectionTitle>
          <p className="text-xl font-semibold mb-6 leading-8 mt-5">
            A Passionate Frontend React Developer and Single-SPA enthusiast.
          </p>
        </div>
        <div className="py-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <RevealOnScroll direction="left" className="text-justify">
            <p>
              I'm a frontend developer driven by the challenge of turning
              complex ideas into simple, elegant web solutions. My focus is on
              building interfaces that not only look great but also perform
              seamlessly across devices.
            </p>
            <p className="mt-5">
              Beyond coding, I enjoy experimenting with new frameworks, refining
              design systems, and contributing to projects that push the
              boundaries of modern web development.
            </p>
            <p className="mt-5">
              {" "}
              My mission is to create digital experiences that feel intuitive,
              accessible, and impactful for every user.
            </p>
            <div className="flex items-center gap-6 mt-7 justify-center">
              <div className="flex items-center flex-col gap-1">
                <div className="text-3xl font-bold port-txt-gradient">4+</div>
                <span className="text-sm">Years Experience</span>
              </div>
              <div className="flex items-center flex-col gap-1">
                <div className="text-3xl font-bold port-txt-gradient">14+</div>
                <span className="text-sm">Projects Completed</span>
              </div>
            </div>
          </RevealOnScroll>
          <div>
            <RevealOnScroll
              direction="right"
              className="w-fit flex border-4 rounded-xl bold-border"
            >
              <img src={PofileImage} className="  h-auto mx-auto   " alt="" />
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
