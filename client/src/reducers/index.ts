import { combineReducers } from 'redux';
import bookList from './bookList';
import auth from './auth';

export const reducer = combineReducers({
  bookList,
  auth
});
