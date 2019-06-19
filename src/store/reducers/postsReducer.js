const initialState = {
    posts: [],
    post: {},
    loading:false,
    error:null
  };
  const reducer = (state = initialState, action) => {
    // take the state and base on the action we will change the stage and return.
  
    // your action here
    switch (action.type) {
      case 'FETCH_POSTS_START':
        return {
          ...state,
          loading:true,
        }
      case 'FETCH_POSTS_SUCCESS':
        return {
          ...state,
          loading:false,
          posts:action.payload
        } 
      case 'FETCH_POSTS_ERROR':
        return {
          ...state,
          loading: false,
          error: action.payload
        }   
      default:
        return state;
    }
  
    // end action.
  }
  export default reducer;