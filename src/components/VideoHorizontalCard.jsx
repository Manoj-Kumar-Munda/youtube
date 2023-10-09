import React from "react";
import useChannel from "../hooks/useChannel";
import { Link } from "react-router-dom";

const VideoHorizontalCard = ({ video, videoId }) => {
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
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
      <Link
        to={"/watch?v=" + videoId}
        className="sm:max-w-sm w-full overflow-hidden rounded-lg self-start"
      >
        <img
          src={thumbnails?.high?.url}
          alt={title}
          className="object-cover w-full aspect-video"
        />
      </Link>
      <div className="flex sm:block flex-row gap-2 ">
        <div className="sm:hidden self-start">
          <img
            src={channelData?.snippet?.thumbnails?.medium?.url}
            alt={channelTitle}
            className="object-cover w-9 h-9 rounded-full"
          />
        </div>

        <div className="w-full flex flex-col gap-2">
        <div>
          <h1 className="text-base md:text-lg font-normal">{title}</h1>
          <div className="flex items-center gap-1">
          <span className="text-xs text-gray-500 font-semibold sm:hidden">
              {channelTitle}
            </span>
            <span className="font-bold text-gray-500 sm:hidden">&middot;</span>

            <span className="text-xs text-gray-500 font-semibold">
              23K views
            </span>
            <span className="font-bold text-gray-500">&middot;</span>
            <span className="text-xs text-gray-500 font-semibold">
              2 hours ago
            </span>
          </div>
        </div>

        <div className="hidden sm:flex gap-2 items-center">
          <div className="">
            <img
              src={channelData?.snippet?.thumbnails?.medium?.url}
              alt={channelTitle}
              className="object-cover w-9 h-9 rounded-full"
            />
          </div>
          <span className="text-xs font-semibold">{channelTitle}</span>
        </div>

        <p className="line-clamp-1 text-xs text-gray-600 font-semibold hidden sm:block">
          {description}
        </p>
      </div>


      </div>
      
    </div>
  );
};

export default VideoHorizontalCard;
