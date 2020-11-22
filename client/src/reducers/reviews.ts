import { actionTypes } from "../actions/action-types";
import { reviewType } from "../actions/rewiewActions";

export interface reviewActionType {
  type: string;
  reviews: reviewType[];
}

const reviewState: reviewType[] = [
  {
    comment: '',
    grade: 0,
    id:0,
    reviewer: {name: '', id: 0}
  }
];

const reviewReducer = (state=reviewState, action: reviewActionType) => {
  switch (action.type) {
    case actionTypes.REVIEWS_LOADED:
      return action.reviews;
    default:
      return state;
    }
};
export default reviewReducer;