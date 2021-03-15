import { createStore,applyMiddleware } from 'redux';
import rootReducer from './rootReducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
//thunk allows to return a func instead of action
import {composeWithDevTools  } from 'redux-devtools-extension';
const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(logger,thunk)))
export default store