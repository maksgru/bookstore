import { actionTypes } from "./action-types";

export const genersLoaded = (geners: [{name: string}]) => ({
  type: actionTypes.GENER_LIST_LOADED,
  payload: geners.map((gener: {name: string}) => gener.name)
});