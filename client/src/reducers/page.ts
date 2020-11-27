import { actionTypes } from "../actions/action-types";
import { SetPageType } from "../actions/pageActions";

const initialState ={
  page: 1,
  pageCount: 5
};

const pageRaducer = (state=initialState, action: SetPageType): {page: number; pageCount: number}=> {
  switch (action.type) {
    case actionTypes.SET_PAGE_NUMBER:
      return {...state, page: action.payload};
    case actionTypes.SET_PAGE_COUNT:
      return {...state, pageCount: action.payload};
    default:
      return state;
  }
};
export default pageRaducer;