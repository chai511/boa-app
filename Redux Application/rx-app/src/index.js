/*import React from 'react';
import ReactDOM from 'react-dom';

import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import {FormReducer} from 'redux-forms';
import calculatorReducers from '../src/Calculator/reducers/calculatorReducers';

import './index.css';
import App from '../src/components/App';


const store = configureStore({
  reducer: calculatorReducers
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
); */



/*
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./sagademo/App";
import sagareducer from "./sagademo/store/reducer";

//npm install redux-saga --save

import { Provider} from "react-redux";
import {applyMiddleware, configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 
           "redux-devtools-extension"; 
import createSagaMiddleware from "redux-saga";

import { watchAgeUp } from "./sagademo/sagas/saga";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore(
  {reducer:sagareducer, middleware:[sagaMiddleware]}
);

sagaMiddleware.run(watchAgeUp)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);*/



/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './LazyLoad/App'
//import {serviceWorker} from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
//serviceWorker();
*/
/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux'
import {store} from './Calculator/store'
import App from './components/App'

const app = document.getElementById('root')

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>
	, app);

/*React with Redux
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
// npm install react-redux --save

import {applyMiddleware,createStore} from 'redux';
import allReducers from './TrainerPortal/Reducers';
import App from './TrainerPortal/Components/App'

import logger from 'redux-logger';
import { composeWithDevTools } from 
           "redux-devtools-extension"; 

const store=createStore(allReducers,composeWithDevTools(
    applyMiddleware(logger)));

//connect store with provider  with app
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,    
    document.getElementById('root')
)
*/
/*
  import {createStore, applyMiddleware} from 'redux'
  import logger from 'redux-logger';
  // reducers are basically functions to update the store
  // Create reducers to update store
  const reducer=function(state,action){
      if(action.type==='INC'){
          return state+action.payload;
      }    
      if(action.type==='DEC'){
          return state-action.payload;
      }
      if(action.type==='MUL'){
        return state*action.payload;
    }
      return state;
  }

  // Creating store and attaching to reducer with initial state
  const store=createStore(reducer,1,applyMiddleware(logger));
  // Subscribe to store to get new state
  store.subscribe(()=>{
      console.log("Store Changed :"+store.getState())//
  });
  // Dispatch action to invoke reducer 
  store.dispatch({type:"INC",payload:1});
  store.dispatch({type:"INC",payload:3});
  store.dispatch({type:"DEC",payload:20});
  store.dispatch({type:'MUL',payload:5})*/
  

/*import {combineReducers,applyMiddleware,createStore}   from 'redux';
import logger from "redux-logger";

//npm install  redux-devtools-extension --save-dev
import { composeWithDevTools } from "redux-devtools-extension"; 
// Goto Chrome, search for "redux dev tools"and add extension


const userReducer=(state={},action)=>{   
    switch(action.type){
        case "CHANGE_NAME":{
        // olddata={...state}
         return state={...state,name:action.payload};    
        }
        case "CHANGE_AGE":{
         return  state={...state,age:action.payload};        
      
        }       
    }
   return state;
}
const tweetReducer=(state={},action)=>{ 
  switch(action.type) {
    case "CHANGE_ADDRESS":{
      return state={...state, address:action.payload};
    }
  }     
   return state;
}

const reducers=combineReducers({
    user:userReducer,
    tweets:tweetReducer
});

const store=createStore(reducers,
    composeWithDevTools(applyMiddleware(logger)));

    store.subscribe(()=>{
    console.log("store Changed:",store.getState());
})
store.dispatch({type:'CHANGE_NAME',payload:"Murthy"});
store.dispatch({type:'CHANGE_AGE',payload:35});
store.dispatch({type:'CHANGE_NAME',payload:"Raju"});
store.dispatch({type:'CHANGE_ADDRESS',payload:'Hyderabad'}); 
*/

/*
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk'; // npm install redux-thunk --save
import { composeWithDevTools } from "redux-devtools-extension";
//npm install  axios --save
import axios from 'axios';
import App from './TrainerPortal/Components/App'

// state tree +Component= DOM tree
const initialState={
    fetching:false,
    fetched:false,
    users:[],
    error:null
}

const reducer=(state=initialState,action)=>{
    switch (action.type){
        case "FETCH_USERS_START":{
            return {...state,fetching:true,fetched:false}      
        }
        case "FETCH_USERS_ERROR":{
            return {...state,fetching:false,fetched:false,error:action.payload}            
        }
        case "RECEIVED_USERS":{
            return {...state,
                       fetching:false,
                       fetched:true,
                       users:action.payload,
                    }         
        }
    }
    return state;
}

const store=configureStore({reducer:reducer},
    composeWithDevTools(applyMiddleware(thunk,logger)));

store.subscribe(()=>console.log(store.getState()))




//thunk middleware expects only one dipatch
store.dispatch((dispatch)=>{
    //multiple actions occur with single action     
    dispatch({type:"FETCH_USERS_START"})

    axios.get("https://jsonplaceholder.typicode.com/users")
    .then ( (response) =>{
       dispatch({type:"RECEIVED_USERS",payload:response.data})
    })
    .catch((error) =>{
      dispatch({type:"FETCH_USERS_ERROR",payload:error})
    })
})// end of code

//connect store with provider  with app
ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,    
  document.getElementById('root')
)

*/

import React from 'react';
import ReactDOM from 'react-dom';
import {FETCHING_GITHUB_DATA,FETCHED_GITHUB_DATA } from '../src/GitHubData/actions/types';
import logger from 'redux-logger';
import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import App from './GitHubData/components/App';
import githubReducer from '../src/GitHubData/reducers/gitHubReducer';
import { fetchGithubData } from '../src/GitHubData/reducers/fetchGitHubData';
const store = configureStore({reducer:githubReducer, middleware:[thunk,logger]});
export const initialState={isLoading:true, data:[]}

store.dispatch({type:"FETCHING_GITHUB_DATA",payload:{initialState}})
store.dispatch(fetchGithubData())
store.dispatch({type:"FETCHED_GITHUB_DATA"})

store.subscribe(()=>console.log(store.getState()));

console.log(store.data)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));