import { actionTypes } from '../actions/action-types';
import { book } from '../actions/';

interface action {
  type: string,
  books: book[]
};

const initialState: book[] = [{
  id: 1,
  imgUrl: '/books/1',
  author: 'Robert Martin',
  title: 'Clean Code',
  owner: 'qw@qw.we'
}];

const books = (state: book[]=initialState, action: action) => {
  switch (action.type) {
    case actionTypes.BOOKS_LOAD_SUCCESS:
      return action.books;
    default:
      return state;
  }
};

export default books;