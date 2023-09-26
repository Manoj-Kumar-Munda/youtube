import React from "react";
import useChannel from "../hooks/useChannel";

const VideoHorizontalCard = ({ video }) => {

  const {
    title,
    description,
    thumbnails,
    publishedAt,
    channelId,
    channelTitle,
  } = video;
  const channelData = useChannel(channelId);

  return (
    <div className="flex gap-3 ">
      <div className="max-w-sm w-full overflow-hidden rounded-lg self-start">
        <img
          src={thumbnails?.high?.url}
          alt={title}
          className="scale-105 object-cover w-full aspect-video"
        />
      </div>
      <div className="w-full flex flex-col gap-2">
        <div>
          <h1 className="text-base md:text-lg font-normal">{title}</h1>
          <div className="flex items-center gap-1">
            <span className="text-xs text-gray-500 font-semibold">
              23K views
            </span>
            <span className="font-bold text-gray-500">&middot;</span>
            <span className="text-xs text-gray-500 font-semibold">
              2 hours ago
            </span>
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <div>
            <img
              src={channelData?.snippet?.thumbnails?.medium?.url}
              alt={channelTitle}
              className="object-cover w-6 h-6 rounded-full"
            />
          </div>
          <span className="text-xs font-semibold">{channelTitle}</span>
        </div>
        
        <p className="line-clamp-1 text-xs text-gray-600 font-semibold">
          {description}
        </p>
      </div>
    </div>
  );
};

export default VideoHorizontalCard;
