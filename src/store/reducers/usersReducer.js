const initialState = {
    a: 21,
};
const reducer =(state = initialState, action) => {
  // take the state and base on the action we will change the stage and return.
  
  // your action here

   if(action.type ==='AGE_UP'){
     return {
       ...state,
       a: state.a + 1,
       loading: false
     }
   }
   if(action.type ==='LOADING') {

     return {
       ...state,
       loading: true
     }
  }
  // end action.
  return state;
}
export default reducer;