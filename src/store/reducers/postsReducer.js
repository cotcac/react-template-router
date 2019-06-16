const initialState = {
    posts: [],
    post: {},
  };
  const reducer = (state = initialState, action) => {
    // take the state and base on the action we will change the stage and return.
  
    // your action here
    switch (action.type) {
      case 'FETCH_POSTS':
        return {
          ...state,
          posts: action.payload,
          loading: false
        }
      case 'FETCH_POST_DETAIL':
        return {
          ...state,
          user: action.payload,
          loading: false
        }
      case 'POST_INSERT':
        return {
          ...state,
          user: action.payload,
          loading:false
        }
      case 'LOADING':
        return {
          ...state,
          loading: true
        }
      default:
        return state;
    }
  
    // end action.
  }
  export default reducer;