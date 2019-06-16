import * as actionTypes from '../actions/actionTypes';
const initialState = {
    posts: [],
    post: {}
  };
  const reducer = (state = initialState, action) => {
    // take the state and base on the action we will change the stage and return.
  
    // your action here
    switch (action.type) {
      case actionTypes.FETCH_ALL:
        return {
          ...state,
          posts: action.payload,
        }
      default:
        return state;
    }
  
    // end action.
  }
  export default reducer;