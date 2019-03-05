import {
    REQUEST_SIGNIN_PENDING,
    REQUEST_SIGNIN_SUCCESS,
    REQUEST_SIGNIN_FAILED,
    QUICK_TECHNIQUE_PAGE,
    TECHNIQUE_PAGE} from './constants.js';
import {Random, Spider} from '../components/Tech';


  

const initialStateSignedIn = {
    isPending: false,
    signedIn:false
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

const initialStateVideos = {
    videos: [...Spider]
}

export const changePage = (state=initialStateVideos, action={}) =>{
    switch(action.type){
        case QUICK_TECHNIQUE_PAGE:
            return Object.assign({}, state, {videos: [...Random]})
        case TECHNIQUE_PAGE:
            return Object.assign({}, state, {videos: [...Spider]})
        default:
            return state;
}}