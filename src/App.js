import React, { Component } from 'react';
import Header from './components/Header';
import TechniquePage from './containers/TechniquePage';
import {tech} from './components/Tech';
import LandingPage from './containers/LandingPage';
import Signin from './components/SignIn/Signin';
import Library from './containers/Library';
import Notes from './components/Notes';
import ErrorBoundary from './components/ErrorBoundary';
import './sass/main.scss';
import {
  Route,
  Switch, 
  Redirect,
  withRouter
} from 'react-router-dom';
import {connect} from 'react-redux';
import {requestSignIn, onPageChange} from './redux/actions';
// import TechCard from './TechCard'


  
/////////connect(mapStateToProps, mapDispatchToProps)///////////////////////


const mapStateToProps = state => {
  return {
    isPending: state.signIn.isPending,
    signedIn: state.signIn.signedIn,
    videos: state.changePage.videos,
    filtered: state.videoFilter.filtered
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
   requestSignIn:  (pass) => requestSignIn(pass)(dispatch),
   onPageChange:  () => dispatch(onPageChange()),

  }
}
/////////////////////////////////////////////////////////////////////////////

const initialState = {
  id: 1,
  // videosApp: [], not needed?
  selectedVideo: `https://www.youtube.com/embed/HR7_InD8i3o?&origin=https://youtu.be/HR7_InD8i3o`,
  }

  class App extends Component {
  constructor(props){
    super(props)
      this.state = initialState;
      this.props.history.listen((location, action) => {//so i can listen to the route change for the video that loads
        this.props.onPageChange();
      });
  }

  componentDidMount(){
    this.setState(state => { 
      return {videos: [...this.LibraryList("spider")]
    }});
  }

  LibraryList = (search) => {//Maybe changhe the libary list into a action/reducer then have the array thats returned form the list/ could pass the function as props???
    let array = [];
    let lowerSearch = search.toLowerCase();
     tech.forEach(obj => {
       let values = Object.values(obj);
      return  values.includes(lowerSearch) ?  array.push({title: obj['title'], url:obj['videoUrl'], id: obj['id']}) 
       : null
      })
     return array;
    }
  
  selectVideo = (e) => {
    const id = e.target.id;
    let defaultUrl = `https://www.youtube.com/embed/${this.props.videos[id].videoUrl}?&origin=https://youtu.be/${this.props.videos[id].videoUrl}`;
    return (this.setState({selectedVideo:defaultUrl}));
  }
  
  render(){
  
    const PrivateRoute = ({ component: Component, ...rest}) => (
      <Route {...rest} render={(props) => (
       this.props.signedIn === true ? 
       <Component {...props} />
       : <Redirect to='/' />
      )} />
     )
    let filter = this.props.filtered;
    console.log("wtf",this.LibraryList("Gi"))
    return (
          <div className="container">
          <ErrorBoundary>
          <Header signedIn ={this.props.signedIn}/>
      <Switch>
                <Route exact path ="/" component={(props) => <Signin {...props}  requestSignIn={this.props.requestSignIn}/>}/>
                <PrivateRoute path ="/Notes" component={Notes} />
                <PrivateRoute path ="/Library" component={Library} />
                <PrivateRoute path ="/LandingPage" component={LandingPage} />
                <PrivateRoute path ="/FilteredTech" component={(props) => <TechniquePage {...props} videos={this.LibraryList(filter)} selectedVideo={this.state.selectedVideo} selectVideo={this.selectVideo} />}/>
                <PrivateRoute path ="/TechniquePage" component={(props) => <TechniquePage {...props} videos={this.LibraryList('back')} selectedVideo={this.state.selectedVideo} selectVideo={this.selectVideo} />}/>
                <PrivateRoute path ="/QuickTech" component={(props) => <TechniquePage {...props} videos={this.props.videos} selectedVideo={this.state.selectedVideo} selectVideo={this.selectVideo} />}/>
      </Switch>
          </ErrorBoundary>
          </div>

    );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

// https://tylermcginnis.com/react-router-pass-props-to-components/
