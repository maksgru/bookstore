import { actionTypes } from "../actions/action-types";
import { BookReviewsType } from "../actions/rewiewActions";

export interface reviewActionType {
  type: string;
  bookReviews: BookReviewsType;
}

const reviewState: BookReviewsType = {
  bookReviews: [
    {
      comment: '',
      grade: 0,
      id:0,
      reviewer: {name: '', id: 0}
    }
  ],
  reviewerId: 0

}

const reviewReducer = (state=reviewState, action: reviewActionType): BookReviewsType => {
  switch (action.type) {
    case actionTypes.REVIEWS_LOADED:
      return action.bookReviews;
    default:
      return state;
    }
};
export default reviewReducer;