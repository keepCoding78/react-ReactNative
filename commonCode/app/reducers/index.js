import { createStore, applyMiddleware, combineReducers } from 'redux';
import CounterReducer from './CounterReducer';
import thunkMiddleware from 'redux-thunk';

const AppReducers = combineReducers({
  CounterReducer,
});

const rootReducer = (state, action) => {
  return AppReducers(state, action);
}

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;