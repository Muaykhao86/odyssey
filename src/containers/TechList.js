import React from 'react';
import TechCard from '../components/TechCard';



const TechList = ({selectVideo, videos}) => {
  return(
    <div className="techList">{

      videos.map((user, i)=>{
        return(
          
            <TechCard 
            selectVideo={selectVideo}
            key={videos[i].id} 
            id= {videos[i].id}
            title={videos[i].title}
            position={videos[i].position}
            />
         
        )})
    }  
    </div>
  )}


export default TechList;