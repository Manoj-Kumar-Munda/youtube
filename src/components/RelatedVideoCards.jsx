import React from "react";
import { calculateTimeDifferenceToNow } from "../utils/helperFunction";

const RelatedVideoCards = ({ video }) => {

  const {
    title,
    thumbnails,
    publishedAt,
    channelTitle,
  } = video;

  return (
    <div className="flex gap-1">
      <div className="self-start shrink-0 basis-40 w-full overflow-hidden aspect-video rounded-lg">
        <img
          src={thumbnails?.high?.url}
          alt={title}
          className="object-cover w-full object-center"
        />
      </div>
      <div className="w-full flex flex-col">
          <h1 className="text-sm font-semibold line-clamp-2">{title}</h1>
          <span className="text-xs font-semibold">{channelTitle}</span>
          <div className="flex gap-1 items-center">
            <span className="text-xs text-gray-500 font-semibold">
              23K views
            </span>
            <span className="font-bold text-gray-500">&middot;</span>
            <span className="text-xs text-gray-500 font-semibold">
              {calculateTimeDifferenceToNow(publishedAt)} ago
            </span>
          </div>
        </div>

        
        
        
      </div>
    
  );
};

export default RelatedVideoCards;
