import {
    REQUEST_SIGNIN_PENDING,
    REQUEST_SIGNIN_SUCCESS,
    REQUEST_SIGNIN_FAILED} from './constants.js';

  

const initialStateSignedIn = {
    isPending: false,
    signedIn:false,
}

export const signIn = (state=initialStateSignedIn, action={})=>{
    switch(action.type){
        case REQUEST_SIGNIN_PENDING:
            return Object.assign({}, state, {isPending: true})
        case REQUEST_SIGNIN_SUCCESS:
            return Object.assign({}, state, {signedIn: action.payload, isPending: false})
        case REQUEST_SIGNIN_FAILED:
            return Object.assign({}, state, {signedIn: action.payload, isPending: false})
        default:
            return state;
    }

}

 