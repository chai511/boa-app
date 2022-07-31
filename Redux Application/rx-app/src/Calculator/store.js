import {applyMiddleware,configureStore} from '@reduxjs/toolkit'
import logger from "redux-logger";
// npm install redux-logger --save-dev
//npm install  redux-devtools-extension --save-dev

import { composeWithDevTools } from  "redux-devtools-extension"; 
import calculatorReducers from './reducers/calculatorReducers'

export const store=configureStore(calculatorReducers,
    composeWithDevTools(applyMiddleware(logger)));