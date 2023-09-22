import React from 'react'
import useSearchResults from '../hooks/useSearchResult'
import { useSelector } from 'react-redux';
import VideoHorizontalCard from './VideoHorizontalCard';


const SearchedVideosContainer = ({searchQuery}) => {
    useSearchResults(searchQuery);

    const videos = useSelector(store => store.video.searchResults)
  return (
    <div className='my-2 flex flex-col gap-4'>
      {
        videos.map( (item) => {
          return(
            <VideoHorizontalCard key={item?.id?.videoId} video={item?.snippet} />
          )
        })
      }

    </div>
  )
}

export default SearchedVideosContainer