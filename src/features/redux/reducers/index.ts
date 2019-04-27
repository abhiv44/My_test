import { combineReducers } from 'redux'
import {userAuthReducer} from './userAuth'
import {dashBoardReducer} from './dashboard'
export default combineReducers({
    userAuth: userAuthReducer,
    dashboardDATA:dashBoardReducer
})