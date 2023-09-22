import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./searchSlice";
import appSlice from "./appSlice";
import videosSlice from "./videosSlice";


const store = configureStore({
    reducer : {
        app : appSlice,
        search : searchSlice,
        video : videosSlice,
    }
})

export default store;