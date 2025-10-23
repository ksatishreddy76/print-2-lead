import React, { useEffect } from "react";

const BREAKPOINTS = {
  mobile: 480,
  tablet: 768,
  laptop: 1024,
  desktop: 1280,
};

const useCurrentScreen = () => {
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = React.useState(window.innerHeight);

  const isMobile = screenWidth <= BREAKPOINTS.mobile;
  const isTablet = screenWidth <= BREAKPOINTS.tablet;
  const isLaptop = screenWidth <= BREAKPOINTS.laptop;
  const isDesktop = screenWidth <= BREAKPOINTS.desktop;

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    BREAKPOINTS,
    screenHeight,
    screenHeight,
    isMobile,
    isTablet,
    isLaptop,
    isDesktop,
  };
};

export default useCurrentScreen;
