import { useEffect, useState } from "react";
import { API_KEY, YOUTUBE_CHANNEL_INFO_API } from "../utils/constants";


const useChannel = (channelId) => {
    
    const [channelInfo, setChannelInfo] = useState([])
    useEffect(() => {
        getChannelData();
      }, []);
    
      const getChannelData = async () => {
        const data = await fetch(
          YOUTUBE_CHANNEL_INFO_API+channelId +
            "&key="+
            API_KEY
        );
        const json = await data.json();
        const snippet = json?.items[0]?.snippet;
        setChannelInfo(snippet);
        console.log(snippet)
    
      };

      return channelInfo;

}

export default useChannel;