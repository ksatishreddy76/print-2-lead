import React from "react";

const CustomButton = ({
  variant = "filled",
  children,
  className = "",
  ...props
}) => {
  if (variant === "filled")
    return (
      <button
        className={`${className} port-filled-btn group px-8 py-4 font-semibold rounded-full border-2 border-white/20 transition-all duration-300 flex items-center gap-3`}
        {...props}
      >
        <div className="group-hover:scale-105 transition-all duration-300">
          {children}
        </div>
      </button>
    );

  if (variant === "gradient")
    return (
      <button
        className={`${className} port-gradient-btn group px-8 py-4 font-semibold rounded-full transition-all duration-300 flex items-center gap-3 shadow-lg relative overflow-hidden`}
        {...props}
      >
        <div className="group-hover:scale-105 transition-all duration-300">
          {children}
        </div>
      </button>
    );

  if (variant === "outlined")
    return (
      <button
        className={`${className} port-outlined-btn group px-8 py-4 font-semibold rounded-full border-2 border-white/20 transition-all duration-300 flex items-center gap-3`}
        {...props}
      >
        <div className="group-hover:scale-105 transition-all duration-300">
          {children}
        </div>
      </button>
    );

  return (
    <button className={`${className} group`} {...props}>
      <div className="group-hover:scale-105 transition-a  ll duration-300">
        {children}
      </div>
    </button>
  );
};

export default CustomButton;
