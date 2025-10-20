import React from "react";

const AnimatedButton = ({ label = "" }) => {
  return (
    <div className="">
      <div
        className="relative bg-gradient-to-b from-slate-700 to-slate-800 h-[70px] w-[200px] overflow-hidden rounded-lg
                before:bg-[conic-gradient(from_0deg,rgba(250,0,183,0.9)_0deg,rgba(81,180,253,0.9)_180deg,rgba(255,0,183,0.9)_360deg)]
                before:absolute
                before:h-[350%]
                before:w-[150%]
                before:left-[-25%]
                before:top-[-125%]
                before:content-['']
                before:animate-[spin-border_3s_linear_infinite]
                "
      >
        <div className="absolute h-[calc(100%-6px)] w-[calc(100%-6px)] top-[3px] left-[3px] content-center text-center bg-gradient-to-b from-slate-800 to-slate-900 rounded-lg text-lg font-semibold cursor-pointer uppercase text-white">
          {label}
        </div>
      </div>
    </div>
  );
};

export default AnimatedButton;
