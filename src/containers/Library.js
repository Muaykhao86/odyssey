import React, { Component } from 'react';
import {
 Link
} from 'react-router-dom';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {
     librarySelector
} from '../redux/actions.js'
  
   const mapStateToProps = state => {
      return { 
      filtered: state.videoFilter.filtered
      }
    }
  
   const mapDispatchToProps = (dispatch) => {
       return {
        librarySelector:  (event) => dispatch(librarySelector(event))
       }
    }

class Library extends Component{
  render(){
    return (
      <div className="library">
        <ul className="library__list">
          <li className="library__item library__link" onClick={this.props.librarySelector} >
              <Link className="library__link" to="/FilteredTech">- Gi -</Link>
              
          </li>
          <li className="library__item library__link" onClick={this.props.librarySelector}>
            <Link className="library__link" to="/FilteredTech">- No-gi -</Link>
          </li>
          <li className="library__item" onClick={this.props.librarySelector}>
            <Link className="library__link" to="/FilteredTech" >- Drills -</Link>
          </li>
          <li className="library__item" onClick={this.props.librarySelector} >
            <Link className="library__link" to="/FilteredTech">- Syllibus -</Link>
          </li>
        </ul>
        
      </div>
    );
  }}

  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Library));

