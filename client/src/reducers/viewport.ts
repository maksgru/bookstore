import { actionTypes } from "../actions/action-types";
import { ViewportWidthType } from "../actions/viewportActions";

const viewportReducer = (state=window.innerWidth, action: ViewportWidthType): number => {
  switch (action.type) {
    case actionTypes.SET_VIEWPORT_WIDTH:
      return action.viewportWidth;
    default:
      return state;
  }
};
export default viewportReducer;