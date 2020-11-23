import { actionTypes } from "../actions/action-types";
interface filterType {
  authors: string[];
  price: string;
  rating: number;
};

interface actionType extends filterType {
  type: string;
}

const filterState: filterType = {
  authors: [''],
  price: '',
  rating: 3
};
const filterReducer = (state=filterState, action: actionType): filterType => {
  switch (action.type) {
    case actionTypes.SET_AUTHORS:
      return {...state, authors: action.authors};
    case actionTypes.SET_PRICE:
      return {...state, price: action.price};
    case actionTypes.SET_RATING:
      return {...state, rating: action.rating};
    default:
      return state;
  }
};
export default filterReducer;