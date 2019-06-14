export const ageUpAsync = (val) =>{
    return {
        type: 'AGE_UP',
        val
    }
  }
  
  export const loading = () =>{
      return {
          type:'LOADING'
      }
  }
  
  export const ageUp = (val) =>{
      return dispatch =>{
          dispatch(loading());
          setTimeout(() => {
              dispatch(ageUpAsync(val))
          }, 4000);
      }
    }
  export const ageDown = (val) =>{
      return {
          type: 'AGE_DOWN',
          val
      }
    }