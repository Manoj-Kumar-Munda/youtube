import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name : "search",
    initialState : {
    },

    reducers : {
       
        setCacheResults : (state,action) => {
            return {...action.payload, ...state};
        }
    }
})

export const {setCacheResults} = searchSlice.actions;
export default searchSlice.reducer;