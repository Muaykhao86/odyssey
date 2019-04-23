import {
    REQUEST_SIGNIN_PENDING,
    REQUEST_SIGNIN_SUCCESS,
    REQUEST_SIGNIN_FAILED,
    QUICK_TECHNIQUE_PAGE,
    WEEKLY_TECHNIQUE_PAGE,
    EMAIL_CHANGE,
    PASSWORD_CHANGE,
    GI_TECH,
    NO_GI_TECH,
    DRILLS,
    SYLLIBUS
  } from './constants.js';

let Email ="";
let Password="";

const fakeAuth = {
  isAuthenticated: false,
    authenticate(pass) {
     pass === true ? 
     this.isAuthenticated = true : console.log("email or password incorrect")
    },
    signout(cb) {
      this.isAuthenticated = false
  }
}

// HIGHER ORDER FUNCTION => RETURNS ANOTHER FUNCTION that takes dispatch and runs the second half of the function
export const requestSignIn = () => (dispatch) => {
    dispatch({type: REQUEST_SIGNIN_PENDING}) 
    let pass = false;
    // console.log(Email+Password);
    if(Email === '' && Password === ''){ pass = true}
    fakeAuth.authenticate(pass);
    fakeAuth.isAuthenticated === true ? 
    dispatch({type: REQUEST_SIGNIN_SUCCESS, payload: true}) : 
    dispatch({type: REQUEST_SIGNIN_FAILED, payload: false})
   }
 
   export const onPageChange = () => { 
   switch(window.location.href){
    case "http://localhost:3000/QuickTech" :
      return ({type: QUICK_TECHNIQUE_PAGE});
    case "http://localhost:3000/TechniquePage" :
      return ({type: WEEKLY_TECHNIQUE_PAGE});
    case "https://muaykhao86.github.io/odyssey/QuickTech" :
      return ({type: QUICK_TECHNIQUE_PAGE});
      case "https://muaykhao86.github.io/odyssey/TechniquePage" :
        return ({type: WEEKLY_TECHNIQUE_PAGE});
      default:
      return ({type: WEEKLY_TECHNIQUE_PAGE});
   }
  }

  // https://muaykhao86.github.io/odyssey/TechniquePage

export const onEmailChange = (email) => {
Email = email
  return({type: EMAIL_CHANGE, payload: email})
}

export const onPasswordChange = (password) => {
Password = password
  return({type: PASSWORD_CHANGE, payload: password})
}

// Library ///////////////////////////////////////////////////////////

export const librarySelector = (event) => {
 switch(event.target.innerHTML.toLowerCase()){
   case "- gi -" : 
    return ({type: GI_TECH});
   case "- no-gi -" : 
    return ({type: NO_GI_TECH});
   case "- drills -" : 
    return ({type: DRILLS});
   case "- syllibus -" : 
    return ({type: SYLLIBUS});
  default:
    return ({type: GI_TECH});   
}
}