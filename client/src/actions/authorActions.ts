import { actionTypes } from "./action-types";

export const authorsLoaded = (authors: [{name: string}]) => ({
  type: actionTypes.AUTHOR_LIST_LOADED,
  payload: authors.map((author: {name: string}) => author.name)
});