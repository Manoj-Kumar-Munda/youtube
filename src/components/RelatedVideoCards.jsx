import React from "react";
import useChannel from "../hooks/useChannel";

const RelatedVideoCards = ({ video }) => {

  const {
    title,
    thumbnails,
    publishedAt,
    channelTitle,
  } = video;

  return (
    <div className="flex gap-1">
      <div className="max-w-sm w-full overflow-hidden aspect-video rounded-lg">
        <img
          src={thumbnails?.high?.url}
          alt={title}
          className="object-cover w-full"
        />
      </div>
      <div className="w-full flex flex-col gap-1">
          <h1 className="text-sm font-semibold lin">{title}</h1>
          <span className="text-xs font-semibold">{channelTitle}</span>
          <div className="flex gap-1 items-center">
            <span className="text-xs text-gray-500 font-semibold">
              23K views
            </span>
            <span className="font-bold text-gray-500">&middot;</span>
            <span className="text-xs text-gray-500 font-semibold">
              2 hours ago
            </span>
          </div>
        </div>

        
        
        
      </div>
    
  );
};

export default RelatedVideoCards;
