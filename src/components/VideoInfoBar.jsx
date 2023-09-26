import React from 'react'
import useChannel from '../hooks/useChannel'

const VideoInfoBar = ({channelId}) => {
    const channelData = useChannel(channelId);
    console.log(channelData);
  return (
    <div className='flex justify-between'>
        <div className='flex'>

        </div>
        <div className='flex'>
            
        </div>

    </div>
  )
}

export default VideoInfoBar