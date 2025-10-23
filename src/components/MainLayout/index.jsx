import { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Portfolio from "../Portfolio";

const MainLayout = () => {
  const headerRef = useRef(null);
  const footerRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(window.innerHeight);

  useEffect(() => {
    function updateHeight() {
      const headerHeight = headerRef.current
        ? headerRef.current.offsetHeight
        : 0;
      const footerHeight = footerRef.current
        ? footerRef.current.offsetHeight
        : 0;
      const height = window.innerHeight - headerHeight - footerHeight;
      setContentHeight(height);
    }

    updateHeight(); // Initial calculation

    window.addEventListener("resize", updateHeight); // Update on resize

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return (
    <div className="relative w-full">
      {location.pathname !== "/profile" && (
        <div ref={headerRef} className="sticky top-0 bg-white z-50">
          <Navbar />
        </div>
      )}

      <div
        style={{
          minHeight: `${contentHeight}px`,
        }}
      >
        <Outlet />
      </div>
      {location.pathname !== "/profile" && (
        <div ref={footerRef}>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default MainLayout;
