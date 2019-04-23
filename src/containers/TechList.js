import React from 'react';
import TechCard from '../components/TechCard';


const TechList = ({videos, selectVideo}) => {

    console.log('TechList', videos);
  return(
     <div className="">
       {
           videos.map((user, i) => {
            return(
            <TechCard 
            id={videos[i].id}
            selectVideo={selectVideo}
            key={videos[i].id} 
            title={videos[i].title}
            position={videos[i].position}
            suit={videos[i].suit}
            type={videos[i].type}
            videoUrl={videos[i].videoUrl}
            />
            )})
        }
      </div>
        ) 
}


export default TechList;
          