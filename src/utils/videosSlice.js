import { createSlice } from "@reduxjs/toolkit";


const videosSlice = createSlice({
    name : "video",
    initialState : {
        searchResults : []
    },

    reducers : {
        setSearchResults : (state, action) => {
            state.searchResults.push(...action.payload)
        }
    }
})

export const {setSearchResults} = videosSlice.actions;
export default videosSlice.reducer;