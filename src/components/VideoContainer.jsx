import React, { useEffect, useRef, useState } from "react";
import { API_KEY, YOUTUBE_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  // const totalResults = useRef(null);
  // const [pageToken, setPageToken] = useState('');
  useEffect(() => {
    getVideos();
  }, []);

  

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    // (!totalResults.current && (totalResults.current = json?.pageInfo?.totalResults))
    setVideos(json?.items);
    // setPageToken(json?.nextPageToken);
    console.log(videos.length);
  };

  return (
    <div className="video-container mt-4">
      {/* <InfiniteScroll 
        className="video-container"
        dataLength={videos.length}
        next={}
      >


      </InfiniteScroll> */}
      {videos.length === 0
        ? new Array(10).fill(0).map((item, index) => <Shimmer key={index} />)
        : videos.map((item) => (
            <Link to={"/watch?v=" + item.id} key={item?.id}>
              <VideoCard item={item} />
            </Link>
          ))}
    </div>
  );
};

export default VideoContainer;
