import { actionTypes } from "./action-types";

export interface SetPageType {
  type: string;
  payload: number;
};

export const setPage = (page: number) => ({
  type: actionTypes.SET_PAGE_NUMBER,
  payload:page
});

export const setPageCount = (pageCount: number) => ({
  type: actionTypes.SET_PAGE_COUNT,
  payload:pageCount
});