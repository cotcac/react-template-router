import Axios from "axios";
// import * as errorHandlerActions from './errorHandlerActions';
import * as loadingAction from './loadingAction';
export const ageUpAsync = (val) => {
    return {
        type: 'AGE_UP',
        val
    }
}

export const fetchAll = () =>{
    return dispatch => {
        dispatch(loadingAction.loading());
        Axios.get(process.env.REACT_APP_BASE_URL + '/users')
        .then(users =>{
            dispatch({
                type:'FETCH_ALL',
                payload:users.data
            })
            dispatch(loadingAction.success());
        })

    }
}
// get user detail.
export const fetchOne = (id) =>{
    console.log(id);
    
    return dispatch => {
        dispatch(loadingAction.loading());
        Axios.get(process.env.REACT_APP_BASE_URL + '/users/' + id)
        .then(users => {
            dispatch({
                type:'FETCH_ONE',
                payload: users.data
            })
            dispatch(loadingAction.success());
        })
        .catch(err =>{
            dispatch(loadingAction.error(err));
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
                type:'INSERT',
                payload: users.data
            })
        })
    }
}
export const ageUp = (val) => {
    return dispatch => {
        dispatch(loadingAction.loading());
        setTimeout(() => {
            dispatch(ageUpAsync(val))
            dispatch(loadingAction.success());
        }, 4000);
        
    }
}
export const ageDown = (val) => {
    return {
        type: 'AGE_DOWN',
        val
    }
}