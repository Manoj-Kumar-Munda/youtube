import React from "react";
import { useSelector } from "react-redux";
import VideoContainer from "./VideoContainer";
import TopicList from "./TopicList";


const MainContent = () => {
  const isMenuOpen = useSelector((store) => store.app.isDefaultSidebarOpen);
  
  return (
    <>
      
        <div className={`relative lg:py-1 mx-2 px-2 md:ml-20 ${(isMenuOpen)?('lg:ml-60'):('lg:ml-22')}`}>
          <TopicList />
          <VideoContainer />
          
        </div>
      
    </>
  );
};

export default MainContent;