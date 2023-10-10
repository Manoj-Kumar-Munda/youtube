import React from "react";
import useChannel from "../hooks/useChannel";
import { convertCount} from "../utils/helperFunction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faDownload, faShare } from "@fortawesome/free-solid-svg-icons";

const VideoInfoBar = ({ channelId }) => {
  const channelData = useChannel(channelId);
  if (!channelData || channelData.length === 0 ) return;
  const {
    snippet: { thumbnails, title },
    statistics: { subscriberCount },
  } = channelData;

  return (
    <div className="flex flex-col md:flex-row justify-between">
      {/* channelData && subs buttons */}
      <div className="flex justify-between md:gap-4">
        <div className="flex gap-2">
          <div className="rounded-full">
            <img
              src={thumbnails?.high?.url}
              alt={title}
              className="w-12 h-12 rounded-full"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-sm font-semibold">{title}</h2>
            <p className="text-xs font-semibold text-gray-600">
              {convertCount(subscriberCount)} subscribers
            </p>
          </div>
        </div>

        <button className="bg-gray-100 self-center text-sm font-semibold py-2 px-4 rounded-3xl">
          Subscribe
        </button>
      </div>

      {/* Like,share,etc... */}
      <div className="flex gap-4 items-center">
        <div className="flex divide-x-2  border py-1 rounded-2xl">
          <button className="px-2">
            <FontAwesomeIcon icon={faThumbsUp} width={20} />
          </button>
          <button className="px-2">
            <FontAwesomeIcon icon={faThumbsDown} flip="horizontal" width={20} />
          </button>
        </div>

        <button className="flex items-center gap-2 border py-1 rounded-2xl px-2 ">
          <div>
            <FontAwesomeIcon
              icon={faShare}
              style={{ color: "#535965" }}
              width={20}
            />
          </div>
          <span className="text-sm font-semibold">Share</span>
        </button>
        <button className="flex items-center gap-2 border py-1 rounded-2xl px-2 ">
          <div>
            <FontAwesomeIcon icon={faDownload} style={{ color: "#5c6370" }} width={20}/>
          </div>
          <span className="text-sm font-semibold">Download</span>
        </button>
      </div>
    </div>
  );
};

export default VideoInfoBar;
