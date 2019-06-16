const initialState = {
  a: 21,
  error:null,
  users: [],
  user: {},
};
const reducer = (state = initialState, action) => {
  // take the state and base on the action we will change the stage and return.

  // your action here
  switch (action.type) {
    case 'FETCH_ALL':
      return {
        ...state,
        users: action.payload,
        loading: false
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
    case 'AGE_UP':
      return {
        ...state,
        a: state.a + 1,
        loading: false
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