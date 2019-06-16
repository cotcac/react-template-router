import Axios from "axios";

export const loading = () => {
    return {
        type: 'LOADING'
    }
}
export const fetchAll = () =>{
    return dispatch => {
        dispatch(loading());
        Axios.get(process.env.REACT_APP_BASE_URL + '/posts')
        .then(res =>{
            dispatch({
                type:'FETCH_POSTS',
                payload:res.data
            })
        })

    }
}
// get user detail.
export const fetchOne = (id) =>{
    return dispatch => {
        dispatch(loading());
        Axios.get(process.env.REACT_APP_BASE_URL + '/posts/' + id)
        .then(res => {
            dispatch({
                type:'FETCH_POST_DETAIL',
                payload: res.data
            })
        })
    }
}
// INSERT USER
export const insert = (post) =>{
    return dispatch => {
        dispatch(loading());
        Axios.post(process.env.REACT_APP_BASE_URL + '/posts/', post)
        .then(res => {
            dispatch({
                type:'POST_INSERT',
                payload: res.data
            })
        })

    }
}
