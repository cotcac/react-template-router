import * as actionTypes from './actionTypes';
export const loading = () => {
    return {
        type: actionTypes.LOADING
    }
}
export const success = () => {
    return {
        type: actionTypes.SUCCESS
    }
}
export const error = (err) =>{
    return {
        type: actionTypes.ERROR,
        payload:err
    }
    
}