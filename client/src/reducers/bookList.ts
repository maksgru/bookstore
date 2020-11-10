import { actionTypes } from '../actions/action-types';
import { book } from '../actions/bookActions';

interface action {
  type: string,
  payload: book[]
};

const initialState = {
  books: [{
    id: 0,
  bookIcon: 'https://www.transparentpng.com/thumb/book/dvATkC-download-book.png',
  author: '',
  name: '',
  owner: ''
}],
loading: true
};

const bookList = (state=initialState, action: action) => {
  switch (action.type) {
    case actionTypes.BOOKS_LIST_SUCCESS:
      return {
        books:action.payload,
        loading: false
      };
    default:
      return state;
  }
};

export default bookList;