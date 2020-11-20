import { actionTypes } from "./action-types";

export interface reviewType {
  comment: string;
  grade: number;
  reviewer: {name: string};
};

export const reviewsLoaded = (reviews: reviewType[]) => ({
  type: actionTypes.REVIEWS_LOADED,
  reviews
});