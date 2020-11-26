import { actionTypes } from '../actions/action-types';
import { bookType } from '../actions/bookActions';

interface bookListAction {
  type: string,
  payload: bookType[]
};

interface bookListReducerType {
  books: bookType[];
  loading: boolean;
};

const initialState: bookListReducerType = {
  books: [{
    id: 0,
    bookIcon: '',
    writer: { name: '' },
    name: '',
    description: '',
    ratings: 0,
    price: 0,
    userId: 0,
    user: [{ id: 0 }]
  }],
  loading: true
};


const bookListReducer = (state = initialState, action: bookListAction): bookListReducerType => {
  switch (action.type) {
    case actionTypes.BOOKS_LIST_REQUEST:
      return state;
    case actionTypes.BOOKS_LIST_SUCCESS:
      return {
        books: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

export default bookListReducer;