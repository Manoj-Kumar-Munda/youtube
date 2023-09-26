import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    setVideos(json?.items);

  };

  return (
    <div className="video-container mt-4">
      
      {videos.length === 0
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
