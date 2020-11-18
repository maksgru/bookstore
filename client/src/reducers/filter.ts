import { actionTypes } from "../actions/action-types";

const filterState = {
  authors: Array(0),
  price: "",
  rating: 3
}

const filter = (state=filterState, action: any) => {
  switch (action.type) {
    case actionTypes.SET_AUTHORS:
      return {...state, authors: action.payload};
    case actionTypes.SET_PRICE:
      return {...state, price: action.payload};
    case actionTypes.SET_RATING:
      return {...state, rating: action.payload};
    default:
      return state;
  }
};
export default filter;