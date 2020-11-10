import { combineReducers } from 'redux';
import bookList from './bookList';
import bookPage from './bookPage';
import auth from './auth';

export const reducer = combineReducers({
  bookList,
  bookPage,
  auth
});
