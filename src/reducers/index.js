/*
import { combineReducers } from 'redux';
import reduceReducers from 'reduce-reducers';
import {reducer as statesReducer} from 'redux-state';
import { routerReducer } from 'react-router-redux'

import mainReducer from './main_reducer.js';

const rootReducer = reduceReducers(
  combineReducers(
  {
    routing: routerReducer,
    main: mainReducer
  }),
  (state) => {
  //  const mergedState = Object.assign({user: USER_DEFAULT_STATE}, {system: SYSTEM_DEFAULT_STATE}, state);

    if(typeof window !== 'undefined' && window['localStorage']){
      localStorage.setItem('state', JSON.stringify(state));
    }
    return state;
  }
);


export default rootReducer;

*/
