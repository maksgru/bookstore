import { actionTypes } from "./action-types";

export const handleAuthors = (authors: string[]=[]) => ({
  type: actionTypes.SET_AUTHORS,
  payload: authors
});

export const handlePrice = (price: string) => ({
  type: actionTypes.SET_PRICE,
  payload: price
});

export const handleRating = (rating: number) => ({
  type: actionTypes.SET_RATING,
  payload: rating
});