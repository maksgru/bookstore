import { actionTypes } from "../actions/action-types";
interface filterType {
  authors: string[];
  price: string;
  rating: number;
};

const filterState: filterType = {
  authors: [''],
  price: '',
  rating: 3
};
const filterReducer = (state=filterState, action: any): filterType => {
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
export default filterReducer;