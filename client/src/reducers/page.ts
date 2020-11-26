import { actionTypes } from "../actions/action-types";
import { SetPageType } from "../actions/pageActions";

const pageRaducer = (state: number=1, action: SetPageType): number => {
  switch (action.type) {
    case actionTypes.SET_PAGE_NUMBER:
      return action.page;
    default:
      return state;
  }
};
export default pageRaducer;