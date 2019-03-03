import React from 'react';
import TechCard from '../components/TechCard';
import {Random, Spider} from '../components/TechList'


const TechGrid = ({selectVideo}) => {
  return(
    <div className="techGrid">{

      Spider.map((user, i)=>{
        return(
          
            <TechCard 
            selectVideo={selectVideo}
            key={Spider[i].id} 
            id= {Spider[i].id}
            title={Spider[i].title}
            />
         
        )})
    }  
    </div>
  )}


export default TechGrid;