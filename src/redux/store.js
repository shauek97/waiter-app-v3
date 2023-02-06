import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import initialState from './initialState';
import tablesReducer from './tablesRedux';
import statusesReducer from './statusesRedux';

const subreducers = {
  tables: tablesReducer,
  statuses: statusesReducer,
};

const reducers = combineReducers(subreducers);

const store = createStore(
    reducers,

    initialState,
    compose(
      applyMiddleware(thunk),

    )
  );
  export default store;