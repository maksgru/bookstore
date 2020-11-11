import { actionTypes } from '../actions/action-types';
const initialState = {
  book: {
    id: 0,
  bookIcon: '',
  author: '',
  name: '',
  rating: 0,
  userId: 0},
  bookImages: [
    {
    id: 0,
    url: '',
    bookId: 0
  }]
}
const bookPage = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.BOOK_DETAILS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
export default bookPage;
