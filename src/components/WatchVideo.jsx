import React from "react";
import useVideoData from "../hooks/useVideoData";

const WatchVideo = ({ videoId }) => {
    console.log(videoId)
    const videoInfo = useVideoData(videoId);
    console.log(videoInfo)
    const {snippet, statistics} = videoInfo;
    const {categoryId, channelId, channelTitle, description,thumbnails,title} = snippet;
    const {viewCount, likeCount, commentCount} = statistics;
    
  return (
    <div className="w-full flex flex-col basis-8/12">
      <iframe
        className=" w-full aspect-video rounded-xl"
        src={`https://www.youtube.com/embed/${videoId}?si=LCgbMDFcmI_PjNc3`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        
      ></iframe>
    </div>
  );
};

export default WatchVideo;
