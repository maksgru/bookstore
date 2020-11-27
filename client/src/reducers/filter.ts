import { actionTypes } from "../actions/action-types";
interface filterType {
  authors: string[];
  gener: string;
  price: string;
  rating: number;
};

interface actionType extends filterType {
  type: string;
}

const filterState: filterType = {
  authors: [],
  gener: '',
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
    case actionTypes.SET_GENER:
      return {...state, gener: action.gener}
    default:
      return state;
  }
};
export default filterReducer;