import { actionTypes } from "../actions/action-types";
import { reviewType } from "../actions/rewiewActions";

export interface reviewActionType {
  type: string;
  reviews: reviewType[];
}

const reviewReducer = (state=[], action: reviewActionType) => {
  switch (action.type) {
    case actionTypes.REVIEWS_LOADED:
      return action.reviews;
    default:
      return state;
    }
};
export default reviewReducer;