import { useEffect, useState } from "react";
import {YOUTUBE_CHANNEL_INFO_API } from "../utils/constants";


const useChannel = (channelId) => {
    
    const [channelInfo, setChannelInfo] = useState(null)
    useEffect(() => {
        getChannelData();
      }, [channelId]);
    
      const getChannelData = async () => {
        const data = await fetch(
          YOUTUBE_CHANNEL_INFO_API+channelId +
            "&key="+
            import.meta.env.VITE_API_KEY
        );
        const json = await data.json();
        const snippet = json?.items[0];
    
        setChannelInfo(snippet);
      };

      

      return channelInfo;

}

export default useChannel;