import React from 'react';




const TechCard = ({id, title, selectVideo}) => {
  
    return (
      <div className="card">
        <h1 className="card__title">{title}</h1>
        <button className="card__btn" onClick={selectVideo}><h1 className="card__id">{id}</h1></button>
      </div>
    );
  }


export default TechCard;