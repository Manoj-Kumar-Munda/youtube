import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { setIsHomepage } from "../utils/appSlice";
import WatchVideo from "../components/WatchVideo";
import RelatedVideo from "../components/RelatedVideo";
import useVideoData from "../hooks/useVideoData";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParam] = useSearchParams();
  const videoId = searchParam.get("v");
  const videoInfo = useVideoData(videoId);
  
  useEffect(() => {
    dispatch(setIsHomepage(false));

    return () => dispatch(setIsHomepage(true));
  }, []);

  if(!videoInfo) return;
  return (
    <div className={`relative lg:py-1 mx-4 flex flex-row justify-center`}>
      <div className="max-w-7xl w-full flex gap-4 flex-wrap ">
        <WatchVideo videoInfo={videoInfo} />
        <RelatedVideo videoInfo={videoInfo} />
      </div>
    </div>
  );
};

export default WatchPage;
