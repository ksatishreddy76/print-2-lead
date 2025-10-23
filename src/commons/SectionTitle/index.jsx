import React from "react";

const SectionTitle = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-between">
      <div className="w-full text-center text-5xl port-txt-gradient font-bold mt-3 mb-3">
        {children}
      </div>
      <div className="port-secondary-bg-gradient min-w-24 rounded-full p-1 "></div>
    </div>
  );
};

export default SectionTitle;
