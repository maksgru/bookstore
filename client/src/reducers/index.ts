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
import sidebarReducer from './sidebar';
import viewportReducer from './viewport';
import sortReducer from './sort';
import pageRaducer from './page';

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
  error: errorReducer,
  sidebar: sidebarReducer,
  viewport: viewportReducer,
  sort: sortReducer,
  page: pageRaducer
});

export type RootState = ReturnType<typeof reducer>;