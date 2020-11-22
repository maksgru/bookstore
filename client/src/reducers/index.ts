import { combineReducers } from 'redux';
import bookPageReducer from './bookPage';
import genersReducer from './geners';
import authorsReducer from './authors';
import authReducer from './auth';
import priceReducer from './price';
import errorReducer from './error';
import filterReducer from './filter';
import favoritesReducer from './favorites';
import reviewReducer from './reviews';
import bookListReducer from './bookList';

export const reducer = combineReducers({
  bookList: bookListReducer,
  bookPage: bookPageReducer,
  geners: genersReducer,
  authors: authorsReducer,
  auth: authReducer,
  filter: filterReducer,
  price: priceReducer,
  favorites: favoritesReducer,
  reviews: reviewReducer,
  error: errorReducer
});

export type RootState = ReturnType<typeof reducer>;