import { actionTypes } from "../actions/action-types";

interface generAction {
  type: string;
  payload: string[];
}

const geners = (state=[], action: generAction) => {
  switch (action.type) {
    case actionTypes.GENER_LIST_LOADED:
      return action.payload;
    default:
      return state;
  }
};
export default geners;