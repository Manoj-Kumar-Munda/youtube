import React from "react";

const Shimmer = () => {
  return (
    <div className="inline-flex flex-col gap-2 w-full">
      <div className="relative w-full aspect-video bg-[#f6f7f8] rounded-md overflow-hidden skeleton"></div>
      <div className="flex space-x-2">
        <div className="relative w-12 h-12 bg-[#f6f7f8] rounded-full overflow-hidden skeleton"></div>
        <div className="flex-1 space-y-2">
          <div className="relative bg-[#f6f7f8] w-full h-5 overflow-hidden skeleton"></div>
          <div className="relative bg-[#f6f7f8] h-5 w-1/2 overflow-hidden skeleton"></div>
        </div>
      </div>
    </div>
  );
};

export default Shimmer;