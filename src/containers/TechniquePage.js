import React from 'react';
import VideoPlayer from '../components/VideoPlayer';
import TechGrid from '../containers/TechGrid';
import Scroll from '../components/Scroll';




const TechniquePage = ({selectVideo, selectedVideo}) => {
  
    return (
      <div className="techPage">
      <VideoPlayer selectedVideo={selectedVideo}/>
      <Scroll>
      <TechGrid selectVideo={selectVideo}/>
      </Scroll>
      </div>
    );
  }


export default TechniquePage;