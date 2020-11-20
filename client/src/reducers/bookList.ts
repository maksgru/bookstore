import { actionTypes } from '../actions/action-types';
import { bookType } from '../actions/bookActions';

interface action {
  type: string,
  payload: bookType[]
};

const initialState = {
  books: [{
    id: 0,
  bookIcon: 'https://www.transparentpng.com/thumb/book/dvATkC-download-book.png',
  writer: {name: ''},
  name: '',
  userId: 0,
  user: []
}],
loading: true,
};

const bookList = (state=initialState, action: action) => {
  switch (action.type) {
    case actionTypes.BOOKS_LIST_REQUEST:
      return state;
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