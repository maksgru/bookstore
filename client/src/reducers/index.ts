import { combineReducers } from 'redux';
import bookList from './bookList';
import bookPage from './bookPage';
import auth from './auth';
import error from './error';

export const reducer = combineReducers({
  bookList,
  bookPage,
  auth,
  error
});
