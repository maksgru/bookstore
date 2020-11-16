import { actionTypes } from "./action-types";

export const genersLoaded = (geners: string[]) => ({
  type: actionTypes.GENER_LIST_LOADED,
  payload: geners
});