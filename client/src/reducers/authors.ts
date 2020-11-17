import { actionTypes } from "../actions/action-types";

interface authorAction {
  type: string;
  payload: string[];
}

const authors = (state=[], action: authorAction) => {
  switch (action.type) {
    case actionTypes.AUTHOR_LIST_LOADED:
      return action.payload;
    default:
      return state;
  }
};
export default authors;