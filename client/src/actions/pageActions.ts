import { actionTypes } from "./action-types";

export interface SetPageType {
  type: string;
  page: number;
};

export const setPage = (page: number) => ({
  type: actionTypes.SET_PAGE_NUMBER,
  page
});