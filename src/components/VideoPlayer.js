import React from 'react';



const VideoPlayer = ({selectedVideo}) => {
    const breakpoints = {
        desktop: 1100,
        tablet: 840,
        mobile: 540
      };
      
    //   if (window.innerWidth >= breakpoints.desktop) {
    //     // do stuff for desktop
    //   } else if (window.innerWidth > breakpoints.tablet) {
    //     // do stuff for tablet
    //   } else if (window.innerWidth <= breakpoints.mobile) {
    //     // do stuff for mobile
    //   }

    if (window.innerWidth >= breakpoints.desktop) {
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
        </div>
        )
    }
    else if(window.innerWidth >= breakpoints.tablet){
        return (
            <div className="videoPlayer">
                <iframe 
                title="Technique-Video"
                width="520" 
                height="300" 
                src={selectedVideo}
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
                </iframe>
            </div>
        )
    }
    else if(window.innerWidth < breakpoints.tablet){
        return (
            <div className="videoPlayer">
                <iframe 
                title="Technique-Video"
                width="320" 
                height="180" 
                src={selectedVideo}
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
                </iframe>
            </div>
        )
    }
}


export default VideoPlayer;