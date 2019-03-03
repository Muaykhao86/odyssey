import React from 'react';




const TechCard = ({id, title, selectVideo}) => {
  
    return (
      <div className="card">
        <img className="card__img" src={require('../img/img.jpg')} alt="Img"/>
        <h1 className="card__title">{title}</h1>
        <h2 className="card__title">Position</h2>
        <h2 className="card__title">Attack/defence</h2>
        <h2 className="card__title">{id}</h2>
        <button className="card__btn" onClick={selectVideo}>Select</button>
        
      </div>
    );
  }


export default TechCard;