import React from 'react';
import {
 Link
} from 'react-router-dom';



const Library = () => {
  
    return (
      <div className="library">
        <ul className="library__list">
          <li className="library__item"><Link className="library__link" to="/VideoPlayer">- Gi -</Link></li>
          <li className="library__item"><Link className="library__link" to="/VideoPlayer">- No-gi -</Link></li>
          <li className="library__item"><Link className="library__link" to="/VideoPlayer">- Drills -</Link></li>
          <li className="library__item"><Link className="library__link" to="/VideoPlayer">- Syllibus -</Link></li>
        </ul>
        
      </div>
    );
  }


export default Library;