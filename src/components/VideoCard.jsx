import React from "react";
import { calculateTimeDifferenceToNow, convertCount } from "../utils/helperFunction";
import useChannel from "../hooks/useChannel";

const VideoCard = ({ item }) => {
  const { snippet, statistics } = item;

  const { channelId, channelTitle, title, thumbnails, publishedAt } = snippet;

  const channelData = useChannel(channelId);

  return (
    <div className="inline-flex flex-col gap-2 cursor-pointer w-full">
      <div className="w-full aspect-video overflow-hidden rounded-lg hover:rounded-none transition-all">
        <img
          src={
            thumbnails?.maxres?.url ||
            thumbnails?.high?.url ||
            thumbnails?.standard?.url
          }
          alt={title}
          className=" object-center w-full object-cover"
        />
      </div>

      <div className="flex flex-row px-1">
        <div className="self-start">
          <img
            src={
              channelData?.snippet?.thumbnails?.high?.url ||
              channelData?.snippet?.thumbnails?.medium?.url
            }
            alt={channelTitle}
            className="w-9 h-9 rounded-full object-cover object-center"
          />
        </div>

        <div className="video-info flex-1 flex flex-col px-2">
          <h2 className="line-clamp-2 font-semibold leading-tight" title={title}>{title}</h2>
          <div className="flex flex-col m-0 p-0">
            <span className="text-sm font-semibold text-gray-600">
              {channelTitle}
            </span>
            <div className="space-x-1">
              <span className="text-sm font-semibold text-gray-600">
                {convertCount(statistics.viewCount)} views
              </span>
              <span className="text-sm font-normal">&#8226;</span>
              <span className="text-sm font-semibold text-gray-600">
                {calculateTimeDifferenceToNow(publishedAt)} ago
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
