import { actionTypes } from "../actions/action-types";
import { bookType } from "../actions/bookActions";

interface favoriteActionType {
  type: string;
  payload: bookType[];
}

const initialState: bookType[] = [
  {
    id: 0,
    bookIcon: '',
    writer: { name: '' },
    name: '',
    description: '',
    ratings: 0,
    price: 0,
    userId: 0,
    user: [{ id: 0 }]
  }
];

const favoritesReducer = (state=initialState, action: favoriteActionType): bookType[] => {
  switch (action.type) {
    case actionTypes.FAVORITES_LOADED:
      return action.payload;
    default:
      return state;
  }
};
export default favoritesReducer;