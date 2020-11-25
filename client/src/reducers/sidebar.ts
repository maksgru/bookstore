import { actionTypes } from '../actions/action-types';

const sidebarReducer = (state=false, action:{type: string}): boolean => {
  switch (action.type) {
    case actionTypes.SHOW_SIDEBAR:
      return true;
    case actionTypes.HIDE_SIDEBAR:
      return false;
    default:
      return state;
  }
};
export default sidebarReducer;