import {
    REQUEST_SIGNIN_PENDING,
    REQUEST_SIGNIN_SUCCESS,
    REQUEST_SIGNIN_FAILED,
    QUICK_TECHNIQUE_PAGE,
    WEEKLY_TECHNIQUE_PAGE,
    GI_TECH,
    NO_GI_TECH, 
    DRILLS,
    SYLLIBUS
} from './constants.js';
import {tech} from '../components/Tech';

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

const allVideos = {
    videos: [],
};


export const changePage = (state=allVideos, action={}) =>{
    switch(action.type){
        case QUICK_TECHNIQUE_PAGE:
            return Object.assign({}, state, {videos: [...tech]})
        case WEEKLY_TECHNIQUE_PAGE:
            return Object.assign({}, state, {videos: [...tech]})
        default:
            return state;
}}


const filteredVideos = {
    filtered: ''
};

export const videoFilter = (state=filteredVideos, action={}) => {
    console.log(action.type)
    switch(action.type){
        case GI_TECH: 
            return Object.assign({}, state, {filtered: "gi"})
        case NO_GI_TECH: 
            return Object.assign({}, state, {filtered: "no-gi, gi"})
        case DRILLS:
            return Object.assign({}, state, {filtered: "drills"})
        case SYLLIBUS:
            return Object.assign({}, state, {filtered: "syllibus"})
        
        default:
        return Object.assign({}, state, {filtered: "guard"})
}
};