import { actionTypes } from "../actions/action-types";

interface Action {
  type: string,
}

const error = (state=false, action: Action) => {
  switch (action.type) {
    case actionTypes.REQUEST_SUCCESS:
      return false;
    case actionTypes.REQUEST_FAILURE:
      return true;
    default:
      return state;
  }
};
export default error;
