import { actionTypes } from "../actions/action-types";
import { bookType } from "../actions/bookActions";

interface favoriteActionType {
  type: string;
  payload: bookType[];
}
const favorites = (state=[], action: favoriteActionType) => {
  switch (action.type) {
    case actionTypes.FAVORITES_LOADED:
      return action.payload;
    default:
      return state;
  }
};
export default favorites;