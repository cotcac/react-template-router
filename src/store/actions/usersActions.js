import Axios from "axios";

export const ageUpAsync = (val) => {
    return {
        type: 'AGE_UP',
        val
    }
}


export const loading = () => {
    return {
        type: 'LOADING'
    }
}

export const fetchUsers = () =>{
    return dispatch => {
        dispatch(loading());
        Axios.get(process.env.REACT_APP_BASE_URL + '/users')
        .then(users =>{
            dispatch({
                type:'FETCH_USERS',
                payload:users.data
            })
        })

    }
}
// get user detail.
export const userDetail = (id) =>{
    return dispatch => {
        dispatch(loading());
        Axios.get(process.env.REACT_APP_BASE_URL + '/users/' + id)
        .then(users => {
            dispatch({
                type:'FETCH_USER_DETAIL',
                payload: users.data
            })
        })
    }
}
export const ageUp = (val) => {
    return dispatch => {
        dispatch(loading());
        setTimeout(() => {
            dispatch(ageUpAsync(val))
        }, 4000);
    }
}
export const ageDown = (val) => {
    return {
        type: 'AGE_DOWN',
        val
    }
}