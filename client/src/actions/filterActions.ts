import { actionTypes } from "./action-types";


export type FilterActionType = ReturnType<typeof handleAuthors> | ReturnType<typeof handlePrice> | ReturnType<typeof handleRating>;

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
