import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

const SearchResults = () => {
    const [searchParam] = useSearchParams();

    useEffect(() => {
        getSearchResults(searchParam.get(search_query))
    })
  return (
    <div>SearchResults</div>
  )
}

export default SearchResults