import React from "react";

const WatchVideo = ({ videoInfo }) => {
  console.log(videoInfo)
  const { snippet, statistics, id } = videoInfo;
  const {
    channelId,
    description,
    title,
  } = snippet;
  const { viewCount, likeCount, commentCount } = statistics;

  return (
    <div className="w-full flex flex-col basis-8/12 flex-grow">
      <iframe
        className=" w-full aspect-video rounded-xl"
        src={`https://www.youtube.com/embed/${id}?si=LCgbMDFcmI_PjNc3`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      
      ></iframe>
      {/* <TitleBar channelId={channelId} title={title} /> */}
    </div>
  );
};

export default WatchVideo;
