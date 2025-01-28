import React from "react";

const AnimatedProgressbar = ({ progress }) => {
  return (
    <div className="relative pt-1">
      <div className="flex mb-2 items-center justify-between">
        <div>
          <span className="font-semibold text-xs">{Math.round(progress)}%</span>
        </div>
      </div>
      <div className="flex mb-2 items-center justify-between">
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-blue-500 h-2.5 rounded-full"
            style={{ width: `${progress}%`, transition: "width 0.5s ease-in-out" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedProgressbar;
