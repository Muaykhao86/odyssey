import {
    REQUEST_SIGNIN_PENDING,
    REQUEST_SIGNIN_SUCCESS,
    REQUEST_SIGNIN_FAILED,
    QUICK_TECHNIQUE_PAGE,
    TECHNIQUE_PAGE} from './constants.js';

 
    

const fakeAuth = {
  
    isAuthenticated: false,
    authenticate() {
      this.isAuthenticated = true
    },
    signout(cb) {
      this.isAuthenticated = false

}
}

// HIGHER ORDER FUNCTION => RETURNS ANOTHER FUNCTION that takes dispatch and runs the second half of the function
export const requestSignIn = () => (dispatch) => {
    dispatch({type: REQUEST_SIGNIN_PENDING})
    fakeAuth.authenticate()
    fakeAuth.isAuthenticated === true ? 
    dispatch({type: REQUEST_SIGNIN_SUCCESS, payload: true}) : 
    dispatch({type: REQUEST_SIGNIN_FAILED, payload: false})
   }

   export const onPageChange = () => { 
   switch(window.location.href){
    case "http://localhost:3000/QuickTech" :
      return ({type: QUICK_TECHNIQUE_PAGE});
    case "http://localhost:3000/TechniquePage" :
      return ({type: TECHNIQUE_PAGE});
    default:
      return ({type: TECHNIQUE_PAGE});
   }
  }

  // https://muaykhao86.github.io/odyssey/TechniquePage

