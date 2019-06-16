import axios from "axios";
import * as loadingAction from './loadingAction';

export const fetchAll = () =>{
    return dispatch => {
        dispatch(loadingAction.loading());
        axios.get(process.env.REACT_APP_BASE_URL + '/posts1')
        .then(res =>{
            dispatch({
                type:'FETCH_ALL',
                payload:res.data
            })
            dispatch(loadingAction.success());
        })
        .catch((err) =>{
            dispatch(loadingAction.error(err.response.status));
        })
    }
}
export const fetchOne = (id) =>{
    return dispatch => {
        dispatch(loadingAction.loading());
        axios.get(process.env.REACT_APP_BASE_URL + '/posts/' + id)
        .then(res => {
            dispatch({
                type:'FETCH_ONE',
                payload: res.data
            })
            dispatch(loadingAction.success());
        })
        .catch((err) =>{
            dispatch(loadingAction.error(err.response.status));
        })
    }
}
// INSERT USER
export const insert = (post) =>{
    return dispatch => {
        dispatch(loadingAction.loading());
        axios.post(process.env.REACT_APP_BASE_URL + '/posts/', post)
        .then(res => {
            dispatch({
                type:'POST_INSERT',
                payload: res.data
            })
            dispatch(loadingAction.success());
        })
        .catch((err) =>{
            dispatch(loadingAction.error(err.response.status));
        })

    }
}
