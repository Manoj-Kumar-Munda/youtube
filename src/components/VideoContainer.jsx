import React from "react";

import Shimmer from "./Shimmer";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import useFetchVideos from "../hooks/useFetchVideos";

const VideoContainer = () => {
  const videos = useFetchVideos();

  return (
    <div className="video-container mt-4">
      { (!videos || videos.length === 0) 
        ? new Array(10).fill(0).map((item, index) => <Shimmer key={index} />)
        : videos.map((item) => (
            <Link to={"watch?v=" + item.id} key={item?.id}>
              <VideoCard item={item} />
            </Link>
          ))}
    </div>
  );
};

export default VideoContainer;
