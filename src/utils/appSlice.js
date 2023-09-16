import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name : "app",
    initialState : {
        isInputOnFocus: false,
        isHomepage : true,
        isDefaultSidebarOpen: true,
        isMobileSidebarOpen : false,

    },
    reducers : {
        setInputOnFocus : (state,action) => {
            state.isInputOnFocus = action.payload;
        },
        setIsHomepage : (state,action) => {
            state.isHomepage = action.payload;
        },
        setDefaultSidebar : (state,action) => {
            state.isDefaultSidebarOpen = action.payload
        },
        toggleDefaultSidebar : state => {
            state.isDefaultSidebarOpen = !state.isDefaultSidebarOpen;
        },
        toggleMobileSidebar : state => {
            state.isMobileSidebarOpen = !state.isMobileSidebarOpen;
        }
    }
})

export const {setInputOnFocus, setIsHomepage, setDefaultSidebar, toggleDefaultSidebar, toggleMobileSidebar} = appSlice.actions;
export default appSlice.reducer;