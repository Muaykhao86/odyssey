import React from 'react';




const TechCard = ({id, title, selectVideo, position}) => {
  
    return (
      <div className="card">
        <h2 className="card__position">{position}</h2>

        <h1 className="card__title">{id}</h1>
        <h1 className="card__title">{title}</h1>

        <button className="card__btn" onClick={selectVideo}>Select</button>
      </div>
    );
  }


export default TechCard;