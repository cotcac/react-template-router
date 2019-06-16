const initialState = {
    loading: false,
    error:false,
    errorStatus:''
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOADING':
            return {
                ...state,
                loading: true,
                error:false,
                errorStatus:''
            }
        case 'SUCCESS':
            return {
                ...state,
                loading: false,
                error:false,
                errorStatus:''
            }
        case 'ERROR':
            return {
                ...state,
                loading: false,
                error:true,
                errorStatus:action.payload
            }
        default:
            return state;
    }
}
export default reducer;