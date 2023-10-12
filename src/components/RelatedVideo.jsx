import React, { useEffect, useState } from 'react'
import { RELATED_VIDEO_API } from '../utils/constants';
import RelatedVideoCards from './RelatedVideoCards';

const RelatedVideo = ({videoInfo}) => {
  const {snippet:{categoryId}} = videoInfo;
  const [relatedVideos, setRelatedVideos] = useState([]);

  useEffect( () => {
    getRelatedVideos();
  },[])

  const getRelatedVideos = async() => {
    const data = await fetch(RELATED_VIDEO_API+categoryId+"&key="+import.meta.env.VITE_API_KEY);
    const json = await data.json();
    setRelatedVideos(json?.items);
  }
  return (
    <div className='order-2 flex-grow basis-80'>
      <div className='flex flex-col gap-4'>
      {
        relatedVideos && (
          relatedVideos.map( (item,index) => {
            return <RelatedVideoCards key={index} video={item?.snippet} />

          })

        )
      }

      </div>
      
    </div>
  )
}

export default RelatedVideo