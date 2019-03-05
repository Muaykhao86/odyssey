import React from 'react';




const TechCard = ({id, title, selectVideo, position}) => {
  
    return (
      <div className="card">
<<<<<<< HEAD
        <h1 className="card__title">{title}</h1>
        <button className="card__btn" onClick={selectVideo}><h1 className="card__id">{id}</h1></button>
=======
        <h2 className="card__position">{position}</h2>

        <h1 className="card__title">{id}</h1>
        <h1 className="card__title">{title}</h1>

        <button className="card__btn" onClick={selectVideo}>Select</button>
>>>>>>> 320174bc4113f1d2fa471f1f271e6ac5d5bec358
      </div>
    );
  }


export default TechCard;