import { actionTypes } from "../actions/action-types";

interface actionType {
  type: string,
}

const errorReducer = (state=false, action: actionType): boolean => {
  switch (action.type) {
    case actionTypes.REQUEST_SUCCESS:
      return false;
    case actionTypes.REQUEST_FAILURE:
      return true;
    default:
      return state;
  }
};
export default errorReducer;
