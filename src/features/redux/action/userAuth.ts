import {USERLOGIN, ERROR} from './actionTypes/actionTypes'
import * as userLogin from  '../data/userLogin.json'
import {login} from './basePath'
export const userAuth = ()=>dispatch=>{
    fetch(login)
    .then(res=> 
        dispatch({
        type:USERLOGIN,
        payload:userLogin})
    )
    .catch(err=> dispatch( { type:ERROR, payload:err.response.data }))
}