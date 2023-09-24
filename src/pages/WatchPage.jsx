import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { setIsHomepage } from "../utils/appSlice";
import WatchVideo from "../components/WatchVideo";
import RelatedVideo from "../components/RelatedVideo";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParam] = useSearchParams();
  const videoId = searchParam.get("v");

  useEffect(() => {
    dispatch(setIsHomepage(false));

    return () => dispatch(setIsHomepage(true));
  }, []);
  return (
    <div className={`relative lg:py-1 mx-4 flex flex-row justify-center`}>
      <div className="max-w-7xl w-full flex gap-2 flex-wrap ">
        <WatchVideo videoId={videoId} />
        <RelatedVideo videoId={videoId} />
      </div>
    </div>
  );
};

export default WatchPage;
