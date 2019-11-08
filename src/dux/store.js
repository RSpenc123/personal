import {createStore, applyMiddleware, combineReducers} from 'redux'
import promiseMiddleware from "redux-promise-middleware"
import userReducer from './userReducer'
import privateReducer from './privateReducer'
import publicReducer from './publicReducer'


const rootReducer = combineReducers({
    userReducer, privateReducer, publicReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware))
