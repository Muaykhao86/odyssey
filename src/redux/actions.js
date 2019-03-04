import {
    REQUEST_SIGNIN_PENDING,
    REQUEST_SIGNIN_SUCCESS,
    REQUEST_SIGNIN_FAILED,
    QUICK_TECHNIQUE_PAGE,
    TECHNIQUE_PAGE} from './constants.js';
 
    

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
      this.isAuthenticated = true
      setTimeout(cb, 100) // fake async
    },
    signout(cb) {
      this.isAuthenticated = false
      setTimeout(cb, 100) // fake async
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

   export const onPageChange = () => 
    // window.location.href === "http://localhost:3000/QuickTech"
    window.location.href === "https://muaykhao86.github.io/odyssey/QuickTech"
    ?
    ({type: QUICK_TECHNIQUE_PAGE}) : ({type: TECHNIQUE_PAGE})
   


