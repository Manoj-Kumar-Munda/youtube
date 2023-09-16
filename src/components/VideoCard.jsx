import React from "react";
import { viewCount } from "../utils/helperFunction";
import useChannel from "../hooks/useChannel";


const VideoCard = ({ item }) => {
  const { snippet, statistics } = item;

  const { channelId, channelTitle, title, thumbnails } = snippet;

  const channelData = useChannel(channelId);

  return (
    <div className="inline-flex flex-col gap-2 cursor-pointer w-full">
      <div className="w-full overflow-hidden rounded-lg hover:rounded-none transition-all">
        <img
          src={thumbnails?.high?.url}
          alt={title}
          className="rounded-lg aspect-video scale-105 object-center w-full object-cover "
        />
      </div>

      <div className="flex flex-row px-1">
        <div className="self-start">
          <img
            src={channelData?.thumbnails?.medium?.url}
            alt={channelTitle}
            className="w-9 h-9 rounded-full"
          />
        </div>

        <div className="video-info flex-1 flex flex-col px-2">
          <h2 className="line-clamp-2 font-semibold leading-tight">{title}</h2>
          <div className="flex flex-col m-0 p-0">
            <span className="text-sm font-semibold text-gray-600">
              {channelTitle}
            </span>
            <div className="space-x-1">
              <span className="text-sm font-semibold text-gray-600">
                {viewCount(statistics.viewCount)} views
              </span>
              <span className="text-sm font-normal">&#8226;</span>
              <span className="text-sm font-semibold text-gray-600">
                16 hours ago
              </span>
            </div>
          </div>
        </div>

        <div className="">
          <div className="space-y-[2px] cursor-pointer hover:bg-gray-100 w-7 h-7 rounded-full flex flex-col justify-center items-center">
            {new Array(3).fill(0).map((item, index) => (
              <span
                key={index}
                className="block w-1 h-1 bg-slate-800 rounded-full"
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
