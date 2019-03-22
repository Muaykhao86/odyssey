import React, { Component } from 'react';
import Header from './components/Header';
import TechniquePage from './containers/TechniquePage';
import {Spider} from './components/Tech';
import LandingPage from './containers/LandingPage';
import Signin from './components/SignIn/Signin';
import Library from './containers/Library';
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

  
/////////connect(mapStateToProps, mapDispatchToProps)///////////////////////

// What state it needs to listen to and send down as props
const mapStateToProps = state => {
  return {
    isPending: state.signIn.isPending,
    signedIn: state.signIn.signedIn,
    videos: state.changePage.videos,
  }
}
// What props it should listen to that are actions, then dispatch it to the reducers as a prop function
const mapDispatchToProps = (dispatch) => {
  return{
   requestSignIn:  () => requestSignIn(true)(dispatch),
   onPageChange:  () => dispatch(onPageChange())
  }
}
/////////////////////////////////////////////////////////////////////////////

const initialState = {
  id: 1,
  videos: [...Spider],
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
  selectVideo = (e) =>{
    let id = e.target.id
    let defaultUrl = `https://www.youtube.com/embed/${this.props.videos[id -1].videoUrl}?&origin=https://youtu.be/${this.props.videos[id -1].videoUrl}`;
    return (this.setState({selectedVideo:defaultUrl}));
  }
   
  render(){

    console.log(this.props.signInEmail)
    const PrivateRoute = ({ component: Component, ...rest}) => (
      <Route {...rest} render={(props) => (
       this.props.signedIn === true ? 
       <Component {...props} />
       : <Redirect to='/' />
      )} />
     )

    return (
          <div className="container">
          <ErrorBoundary>
          <Header signedIn ={this.props.signedIn}/>
      <Switch>
                <Route exact path ="/" component={(props) => <Signin {...props}  requestSignIn={this.props.requestSignIn}/>}/>
                <PrivateRoute path ="/Library" component={Library} />
                <PrivateRoute path ="/LandingPage" component={LandingPage} />
                <PrivateRoute path ="/TechniquePage" component={(props) => <TechniquePage {...props} videos = {this.props.videos} selectedVideo={this.state.selectedVideo} selectVideo={this.selectVideo} />}/>
                <PrivateRoute path ="/QuickTech" component={(props) => <TechniquePage {...props} videos = {this.props.videos} selectedVideo={this.state.selectedVideo} selectVideo={this.selectVideo} />}/>
      </Switch>
          </ErrorBoundary>
            </div>

    );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

// https://tylermcginnis.com/react-router-pass-props-to-components/
