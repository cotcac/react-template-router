import axios from "axios";
import * as loadingAction from './loadingAction';
import * as actionTypes from './actionTypes';
export const fetchAll = () =>{
    return dispatch => {
        dispatch(loadingAction.loading());
        axios.get(process.env.REACT_APP_BASE_URL + '/posts')
        .then(res =>{
            dispatch({
                type: actionTypes.FETCH_ALL,
                payload:res.data
            })
            dispatch(loadingAction.success());
        })
        .catch((err) =>{
            dispatch(loadingAction.error(err.response.status));
        })
    }
}