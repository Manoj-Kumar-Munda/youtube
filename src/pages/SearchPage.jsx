import React from 'react'
import { useSearchParams } from 'react-router-dom'

const SearchPage = () => {
  const [searchParam] = useSearchParams();

  
  return (
    <div>
      SearchPage

    </div>
  )
}

export default SearchPage