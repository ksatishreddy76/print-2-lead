import React, { useEffect, useState, useRef } from "react";
import "./css/styles.css";
import { Sun, MoonStar, Section, ChevronUp } from "lucide-react";
import Navbar from "./components/navbar";
import UserContent from "./components/user-cont";
import useTheme from "../../hooks/use-theme";
import About from "./components/about";
import Experience from "./components/experience";
import Skills from "./components/skills";
import Footer from "./components/footer";
import Contact from "./components/contact";
import EmailLoader from "../../commons/EmailLoader";

const Portfolio = () => {
  const { currentTheme, toggleTheme } = useTheme();

  const [upIconVision, setUpIconVision] = useState(false);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  const footerRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const ScrollToPosition = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScrollTop = () => {
      if (window.scrollY > 300) {
        setUpIconVision(true);
      } else {
        setUpIconVision(false);
      }
    };

    window.addEventListener("scroll", handleScrollTop);

    return () => {
      window.removeEventListener("scroll", handleScrollTop);
    };
  }, []);

  return (
    <div className="w-full relative">
      <div
        className={`h-0 z-50 transition-all duration-300 ${upIconVision ? "opacity-100 translate-y-0 sticky top-0" : "opacity-0 -translate-y-20  sticky -top-20"}`}
      >
        <Navbar
          homeRef={homeRef}
          aboutRef={aboutRef}
          experienceRef={experienceRef}
          skillsRef={skillsRef}
          contactRef={contactRef}
          footerRef={footerRef}
          scrollTo={scrollTo}
          upIconVision={upIconVision}
        />
      </div>

      <div>
        <Navbar
          homeRef={homeRef}
          aboutRef={aboutRef}
          experienceRef={experienceRef}
          skillsRef={skillsRef}
          contactRef={contactRef}
          footerRef={footerRef}
          scrollTo={scrollTo}
          upIconVision={upIconVision}
        />
      </div>

      <div
        ref={homeRef}
        className="overflow-hidden"
        style={{ position: "unset" }}
      >
        <UserContent />
      </div>
      <section ref={aboutRef} className="py-20 overflow-hidden">
        <About />
      </section>
      <section ref={experienceRef} className="py-20 overflow-hidden">
        <Experience />
      </section>
      <section ref={skillsRef} className="py-20 overflow-hidden">
        <Skills />
      </section>
      <section ref={contactRef} className="py-20 overflow-hidden">
        <Contact />
      </section>
      <section ref={footerRef} className="">
        <Footer />
      </section>

      <div
        onClick={() => toggleTheme()}
        className="fixed right-0 bottom-24 secondary-bg border-primary rounded-l-full p-2 cursor-pointer"
      >
        {currentTheme === "light" ? <Sun /> : <MoonStar />}
      </div>

      <div
        onClick={ScrollToPosition}
        className="port-secondary-bg port-secondary-text w-fit p-2 rounded-full fixed right-4 bottom-6 cursor-pointer opacity-70 hover:opacity-100 transition-all duration-500"
        style={{
          transform: upIconVision ? "translateY(0px)" : "translateY(-800px)",
          opacity: upIconVision ? 1 : 0,
        }}
      >
        <ChevronUp />
      </div>
    </div>
  );
};

export default Portfolio;
