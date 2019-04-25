import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {
    BrowserRouter as Router,
} from 'react-router-dom';

import { Provider} from 'react-redux';

import { createStore, applyMiddleware, combineReducers, compose} from 'redux';
import {signIn, changePage, videoFilter} from './redux/reducers';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';


const logger = createLogger();// redux-logger
const rootReducer = combineReducers({signIn, changePage, videoFilter});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware, logger)));//
const supportsHistory = 'pushState' in window.history

ReactDOM.render(

    <Provider store={store}>
    <Router basename={process.env.PUBLIC_URL} forceRefresh={!supportsHistory}>
    <App/>
    </Router>
    </Provider> ,document.getElementById('root')
);

 // <Router basename={process.env.PUBLIC_URL} if needed></Router>

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA */}
 serviceWorker.unregister(); 
