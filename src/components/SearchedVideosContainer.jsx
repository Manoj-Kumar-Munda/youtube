import React from 'react'
import useSearchResults from '../hooks/useSearchResult'
import VideoHorizontalCard from './VideoHorizontalCard';


const SearchedVideosContainer = ({searchQuery}) => {
    const videos = useSearchResults(searchQuery);
  return (
    <div className='my-2 flex flex-col gap-8'>
      {
        videos.map( (item) => {
          return(
            <VideoHorizontalCard key={item?.id?.videoId} video={item?.snippet} videoId={item?.id?.videoId} />
          )
        })
      }

    </div>
  )
}

export default SearchedVideosContainer