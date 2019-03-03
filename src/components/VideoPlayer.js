import React from 'react';



const VideoPlayer = ({selectedVideo}) => {

    return (
    <div className="videoPlayer">
    <iframe 
    title="Technique-Video"
    width="720" 
    height="405" 
    src={selectedVideo}
    frameBorder="0" 
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
    allowFullScreen>
    </iframe>
    </div>)

}


export default VideoPlayer;