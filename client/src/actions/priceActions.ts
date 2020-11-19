import { actionTypes } from './action-types';

export const priceLoaded = (priceRange: number[]) => ({
  type: actionTypes.PRICE_RANGE_LOADED,
  payload: priceRange
});