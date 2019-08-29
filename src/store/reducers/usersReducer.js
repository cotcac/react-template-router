import * as actionTypes from '../actions/actionTypes';
const initialState = {
  users: [],
  user: {},
  loading:false,
  error:null
};
const reducer = (state = initialState, action) => {
  // take the state and base on the action we will change the stage and return.

  // your action here
  switch (action.type) {
    case 'FETCH_USERS_START':
      return {
        ...state,
        loading: true,
      }
    case 'FETCH_USERS_ERROR': 
    return  {
      ...state,
      loading:false,
      error: action.payload
    }  
    case 'FETCH_USERS_SUCCESS':
      return {
        ...state,
        loading:false,
        users: action.payload
      }
    case actionTypes.FETCH_ONE:
      return {
        ...state,
        user: action.payload,
      }
    case actionTypes.INSERT:
      return {
        ...state,
        user: action.payload,
      }
    case actionTypes.LOGIN:
      return {
        ...state,
        user: action.payload
      }  
    default:
      return state;
  }

  // end action.
}
export default reducer;