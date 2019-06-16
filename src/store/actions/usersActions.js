import Axios from "axios";
import * as actionTypes from './actionTypes';
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
                type: actionTypes.FETCH_ALL,
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
export const ageUp = (val) => {
    return dispatch => {
        dispatch(loadingAction.loading());
        setTimeout(() => {
            dispatch(ageUpAsync(val))
            dispatch(loadingAction.success());
        }, 4000);
        
    }
}
