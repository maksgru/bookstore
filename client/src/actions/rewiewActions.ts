import { actionTypes } from "./action-types";

export interface reviewType {
  comment: string;
  grade: number;
  id: number;
  reviewer: {
    name: string;
    id: number;
  };
};

export const reviewsLoaded = (reviews: reviewType[]) => ({
  type: actionTypes.REVIEWS_LOADED,
  reviews
});