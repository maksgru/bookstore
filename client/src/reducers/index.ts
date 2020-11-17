import { combineReducers } from 'redux';
import bookList from './bookList';
import bookPage from './bookPage';
import geners from './geners';
import authors from './authors';
import auth from './auth';
import error from './error';

export const reducer = combineReducers({
  bookList,
  bookPage,
  geners,
  authors,
  auth,
  error
});
