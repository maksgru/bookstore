import { actionTypes } from "./action-types";

export const authorsLoaded = (authors: string[]) => ({
  type: actionTypes.AUTHOR_LIST_LOADED,
  payload: authors
});