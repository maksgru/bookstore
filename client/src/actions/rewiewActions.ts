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

export interface BookReviewsType {
  bookReviews: reviewType[];
  reviewerId: number | null;
}

export const reviewsLoaded = (bookReviews: BookReviewsType) => ({
  type: actionTypes.REVIEWS_LOADED,
  bookReviews
});