import { actionTypes } from "../actions/action-types";

const locationReducer = (state='/', action: {type: string}): string => {
  switch (action.type) {
    case actionTypes.ROOT_LOCATION:
      return '/';
    case actionTypes.PROFILE_LOCATION:
      return '/profile';
    default:
      return state;
  }
};
export default locationReducer;