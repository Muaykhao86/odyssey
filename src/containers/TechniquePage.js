import React, {Component} from 'react';
import VideoPlayer from '../components/VideoPlayer';
import TechList from '../containers/TechList';
import Scroll from '../components/Scroll';


class TechniquePage extends Component{
render(){
  const {videos, selectedVideo, selectVideo} = this.props;
  console.log({videos})
    return (
      <div className="techPage">
      <VideoPlayer selectedVideo={selectedVideo}/>
      <Scroll>
      <TechList videos={videos} selectVideo={selectVideo}/>
      </Scroll>
      </div>
    )
  }
  }


export default TechniquePage;