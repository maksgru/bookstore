import { actionTypes } from '../actions/action-types';
import { book } from '../actions/bookActions';

interface action {
  type: string,
  books: book[]
};

const initialState = [{
  id: 0,
  imgUrls: [],
  author: '',
  title: '',
  owner: ''
}];

const bookList = (state=initialState, action: action) => {
  switch (action.type) {
    case actionTypes.BOOKS_LOAD_SUCCESS:
      return action.books;
    default:
      return state;
  }
};

export default bookList;