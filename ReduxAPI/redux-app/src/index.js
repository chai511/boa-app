
  import {createStore} from 'redux'
  // reducers are basically functions to update the store
  // Create reducers to update store
  const reducer=function(state,action){
      if(action.type==='INC'){
          return state+action.payload;
      }    
      if(action.type==='DEC'){
          return state-action.payload;
      }
      return state;
  }

  // Creating store and attaching to reducer with initial state
  const store=createStore(reducer,1);
  // Subscribe to store to get new state
  store.subscribe(()=>{
      console.log("Store Changed :"+store.getState())//
  });
  // Dispatch action to invoke reducer 
  store.dispatch({type:"INC",payload:1});
  store.dispatch({type:"INC",payload:3});
  store.dispatch({type:"DEC",payload:20});

  store.dispatch({type:'Multipy',payload:5})