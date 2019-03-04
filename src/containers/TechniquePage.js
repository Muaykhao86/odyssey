import React from 'react';
import VideoPlayer from '../components/VideoPlayer';
import TechList from '../containers/TechList';
import Scroll from '../components/Scroll';




const TechniquePage = ({selectVideo, selectedVideo, videos}) => {
  
    return (
      <div className="techPage">
      <VideoPlayer selectedVideo={selectedVideo}/>
      <Scroll>
      <TechList videos={videos} selectVideo={selectVideo}/>
      </Scroll>
      </div>
    );
  }


export default TechniquePage;