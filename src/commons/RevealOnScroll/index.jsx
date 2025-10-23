import React, { useEffect, useRef, useState } from "react";
import "./reveal-style.css";

const RevealOnScroll = ({
  children,
  direction = "bottom",
  duration = 1000,
  delay = 0,
  distance = 100,
  threshold = 0.1,
  rootMargin = "0px",
  triggerOnce = true,
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Create IntersectionObserver instance
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Check if element is intersecting
        if (entry.isIntersecting) {
          setIsVisible(true);
          setHasAnimated(true);

          // If triggerOnce is true, disconnect observer after first trigger
          if (triggerOnce) {
            observer.disconnect();
          }
        } else {
          // If triggerOnce is false, hide element when out of view
          if (!triggerOnce && hasAnimated) {
            setIsVisible(false);
          }
        }
      },
      {
        threshold: threshold,
        rootMargin: rootMargin,
      },
    );

    // Start observing
    observer.observe(element);

    // Cleanup function
    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce, hasAnimated]);

  return (
    <div
      ref={elementRef}
      className={`reveal-wrapper ${className}`}
      data-direction={direction}
      data-visible={isVisible}
      style={{
        "--reveal-duration": `${duration}ms`,
        "--reveal-delay": `${delay}ms`,
        "--reveal-distance": `${distance}px`,
      }}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;
