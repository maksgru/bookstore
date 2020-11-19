import { actionTypes } from "./action-types";
import { bookType } from "./bookActions";

export const favoritesLoaded = (books: bookType[]) => ({
  type: actionTypes.FAVORITES_LOADED,
  payload: books
});