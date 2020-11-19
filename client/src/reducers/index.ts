import { combineReducers } from 'redux';
import bookList from './bookList';
import bookPage from './bookPage';
import geners from './geners';
import authors from './authors';
import auth from './auth';
import price from './price';
import error from './error';
import filter from './filter';
import favorites from './favorites';

export const reducer = combineReducers({
  bookList,
  bookPage,
  geners,
  authors,
  auth,
  filter,
  price,
  favorites,
  error
});
