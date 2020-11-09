import { actionTypes } from '../actions/action-types';
import { book } from '../actions/bookActions';

// interface action {
//   type: string,
//   payload: book[]
// };

const initialState = {
  books: [{
    id: 0,
  imgUrls: [''],
  author: '',
  name: '',
  owner: ''
}],
loading: true
};

const bookList = (state=initialState, action: any) => {
  switch (action.type) {
    case actionTypes.BOOKS_LOAD_SUCCESS:
      return {
        books:action.payload,
        loading: false
      };
    default:
      return state;
  }
};

export default bookList;