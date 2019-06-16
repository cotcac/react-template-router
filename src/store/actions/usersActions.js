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

export const fetchAll = () =>{
    return dispatch => {
        dispatch(loading());
        Axios.get(process.env.REACT_APP_BASE_URL + '/users')
        .then(users =>{
            dispatch({
                type:'FETCH_ALL',
                payload:users.data
            })
        })

    }
}
// get user detail.
export const fetchOne = (id) =>{
    console.log(id);
    
    return dispatch => {
        dispatch(loading());
        Axios.get(process.env.REACT_APP_BASE_URL + '/users/' + id)
        .then(users => {
            dispatch({
                type:'FETCH_ONE',
                payload: users.data
            })
        })
    }
}
// INSERT USER
export const insert = (post) =>{
    return dispatch => {
        dispatch(loading());
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