import { actionTypes } from "./action-types";

export interface SortType {
  type: string;
  payload: string;
}

export const setSortTarget = (target: string): SortType => ({
  type: actionTypes.SET_SORT_TARGET,
  payload: target
});



export const setSortDirection = (direction: string): SortType => ({
  type: actionTypes.SET_SORT_DIRECTION,
  payload: direction
});