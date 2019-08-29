import Axios from "axios";
import * as actionTypes from './actionTypes';
// import * as errorHandlerActions from './errorHandlerActions';
import * as loadingAction from './loadingAction';
export const fetchAll = () =>{
    return dispatch => {
        dispatch({type:'FETCH_USERS_START'});
        setTimeout(() =>{
            Axios.get(process.env.REACT_APP_BASE_URL + '/users')
            .then(users =>{
                dispatch({
                    type: 'FETCH_USERS_SUCCESS',
                    payload:users.data
                })
            })
            .catch((err)=>{
                dispatch({type:'FETCH_USERS_ERROR',payload:err.response.status});    
            })

        },5000) 

      

    }
}
// get user detail.
export const fetchOne = (id) =>{
    return dispatch => {
        dispatch(loadingAction.loading());
        Axios.get(process.env.REACT_APP_BASE_URL + '/users/' + id)
        .then(users => {
            dispatch({
                type:actionTypes.FETCH_ONE,
                payload: users.data
            })
            dispatch(loadingAction.success());
        })
        .catch(err =>{
            dispatch(loadingAction.error(err.response.status));
        })
    }
}
// INSERT USER
export const insert = (post) =>{
    return dispatch => {
        dispatch(loadingAction.loading());
        Axios.post(process.env.REACT_APP_BASE_URL + '/users/', post)
        .then(users => {
            dispatch({
                type: actionTypes.INSERT,
                payload: users.data
            })
            dispatch(loadingAction.success());
        })
        .catch(err =>{
            dispatch(loadingAction.error(err.response.status));
        })
    }
}
// LOGIN 
export const login =(post) =>{
    return dispatch => {
        dispatch(loadingAction.loading());
        Axios.post(process.env.REACT_APP_BASE_URL + '/users/', post)
        .then(users => {
            dispatch({
                type: actionTypes.LOGIN,
                payload: users.data
            })
            dispatch(loadingAction.success());
        })
        .catch(err =>{
            dispatch(loadingAction.error(err.response.status));
        })
    }
}