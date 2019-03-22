import React from 'react';




const TechCard = ({id, title, selectVideo}) => {
  
    return (
      <div className="card" onClick={selectVideo} id={id}>
        <h1 id={id} className="card__title">{title}</h1>
      </div>
    );
  }


export default TechCard;