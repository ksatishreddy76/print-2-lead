import React, { useEffect } from "react";
import "./css/styles.css";
import { Sun, MoonStar, Section } from "lucide-react";
import Navbar from "./components/navbar";
import UserContent from "./components/user-cont";
import useTheme from "../../hooks/use-theme";
import About from "./components/about";
import Experience from "./components/experience";
import Skills from "./components/skills";
import Footer from "./components/footer";
import Contact from "./components/contact";

const Portfolio = () => {
  const { currentTheme, toggleTheme } = useTheme();

  return (
    <div className="w-full relative">
      <Navbar />
      <section>
        <UserContent />
      </section>
      <section className="py-16 min-h-screen">
        <About />
      </section>
      <section className="py-16 min-h-screen">
        <Experience />
      </section>
      <section className="py-16 min-h-screen">
        <Skills />
      </section>
      <section className="py-16 min-h-screen">
        <Contact />
      </section>
      <section className="">
        <Footer />
      </section>

      <div
        onClick={() => toggleTheme()}
        className="fixed right-0 bottom-24 secondary-bg border-primary rounded-l-full p-2 cursor-pointer"
      >
        {currentTheme === "light" ? <Sun /> : <MoonStar />}
      </div>
    </div>
  );
};

export default Portfolio;
