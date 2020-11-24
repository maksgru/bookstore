import { actionTypes } from "./action-types";

export const handleAuthors = (authors: string[]) => ({
  type: actionTypes.SET_AUTHORS,
  authors
});

export const handlePrice = (price: string) => ({
  type: actionTypes.SET_PRICE,
  price
});

export const handleRating = (rating: number) => ({
  type: actionTypes.SET_RATING,
  rating
});
