import axios from "axios";
export const fetchAll = () =>{
    return dispatch => {
        dispatch({type:'FETCH_POSTS_START'});
        axios.get(process.env.REACT_APP_BASE_URL + '/posts')
        .then(res =>{
            dispatch({
                type: 'FETCH_POSTS_SUCCESS',
                payload:res.data
            })
        })
        .catch((err) =>{
            dispatch({type:'FETCH_POSTS_ERROR', payload:err.response.status});
        })
    }
}