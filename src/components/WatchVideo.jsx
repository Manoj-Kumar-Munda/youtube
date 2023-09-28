import React, { useState } from "react";

import VideoInfoBar from "./VideoInfoBar";
import { convertCount } from "../utils/helperFunction";

const WatchVideo = ({ videoInfo }) => {
  const { snippet, statistics, id } = videoInfo;
  const { channelId, description, title } = snippet;
  const { viewCount, commentCount } = statistics;
  const [showMore, setShowMore] = useState(false);


  return (
    <div className="w-full flex flex-col basis-8/12 flex-grow">
      <iframe
        className=" w-full aspect-video rounded-xl"
        src={`https://www.youtube.com/embed/${id}?si=LCgbMDFcmI_PjNc3`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      <h1 className="font-semibold py-2">{title}</h1>
      <div>
        <VideoInfoBar channelId={channelId} />
      </div>
      <div className="bg-gray-100 px-3 rounded-2xl my-2 ">
        <p className="text-sm font-semibold py-1">{convertCount(viewCount)} views 2 hours ago</p>
        <p className={`text-sm font-semibold overflow-hidden ${(showMore)?"line-clamp-none":"line-clamp-4"}`}>
          {description}
        </p>
        <span className="text-sm font-semibold cursor-pointer" onClick={() => setShowMore(!showMore)}>
          {
            showMore?"Show Less":"Show More"
          }
          
        </span>
      </div>
    </div>
  );
};

export default WatchVideo;
