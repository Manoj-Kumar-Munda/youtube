import React from "react";

import VideoInfoBar from "./VideoInfoBar";

const WatchVideo = ({ videoInfo }) => {
  console.log(videoInfo);
  const { snippet, statistics, id } = videoInfo;
  const { channelId, description, title } = snippet;
  const { viewCount, likeCount, commentCount } = statistics;

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
    </div>
  );
};

export default WatchVideo;
