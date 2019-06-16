export const loading = () => {
    return {
        type: 'LOADING'
    }
}
export const success = () => {
    return {
        type: 'SUCCESS'
    }
}
export const error = (err) =>{
    return {
        type:'ERROR',
        payload:err
    }
    
}