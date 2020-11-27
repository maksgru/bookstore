import { actionTypes } from '../actions/action-types';
import { bookDetailsType } from '../actions/bookActions';
const initialState: bookDetailsType = {
  book: {
    id: 0,
    bookIcon: '',
    writer: {name: ''},
    name: '',
    description: '',
    rating: 0,
    price: 0,
    userId: 0,
    user: [{id: 0}]
  },
  bookImages: [{
    id: 0,
    url: '',
    bookId: 0
  }]
}; 

interface bookPageAction {
  type: string;
  payload: bookDetailsType
}

const bookPageReducer = (state = initialState, action: bookPageAction): bookDetailsType => {
  switch (action.type) {
    case actionTypes.BOOK_DETAILS_SUCCESS:
      return action.payload;
    case actionTypes.BOOK_IMAGES_LOADED:
      return {...state, bookImages: action.payload.bookImages}
    default:
      return state;
  }
}
export default bookPageReducer;
