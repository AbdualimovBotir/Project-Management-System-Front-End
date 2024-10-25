import { applyMiddleware, combineReducers, createStore } from 'redux';
// import * as thunk from 'redux-thunk'; // Named import
import  {thunk } from 'redux-thunk';
import authReducer from './Auth/Reducer';
import projectReducer from './Project/Reducer';
import chatReducer from './Chat/Reducer';
import commentReducer from './Comment/Reducer';
import issueReducer from './Issue/Reducer';
import subscriptionReducer from './Subscription/Reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  chat: chatReducer,
  comment: commentReducer,
  issue: issueReducer,
  subscription: subscriptionReducer
});

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk) 
);
