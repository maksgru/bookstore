import { combineReducers } from 'redux';
import books from './book';
import auth from './auth';

export const reducer = combineReducers({
  books,
  auth
});
