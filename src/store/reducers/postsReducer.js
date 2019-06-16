const initialState = {
    posts: [],
    post: {},
    error:null
  };
  const reducer = (state = initialState, action) => {
    // take the state and base on the action we will change the stage and return.
  
    // your action here
    switch (action.type) {
      case 'FETCH_ALL':
        return {
          ...state,
          posts: action.payload,
          loading: false
        }
      case 'ERROR': 
       return {
         ...state,
         loading:false,
         error: action.payload
       }  
      case 'FETCH_ONE':
        return {
          ...state,
          user: action.payload,
          loading: false
        }
      case 'INSERT':
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