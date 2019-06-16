import * as actionTypes from '../actions/actionTypes';
const initialState = {
    loading: false,
    error:false,
    errorStatus:''
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOADING:
            return {
                ...state,
                loading: true,
                error:false,
                errorStatus:''
            }
        case actionTypes.SUCCESS:
            return {
                ...state,
                loading: false,
                error:false,
                errorStatus:''
            }
        case actionTypes.ERROR:
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