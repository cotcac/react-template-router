const initialState = {
    a: 21,
};
const reducer =(state = initialState, action) => {
  // take the state and base on the action we will change the stage and return.
  // your action here
   if(action.type ==='UPDATE_A'){
     return {
       ...state,
       a: state.a + 1
     }
   }
  // end action.
  return state;
}
export default reducer;