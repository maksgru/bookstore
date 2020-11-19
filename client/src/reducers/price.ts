import { actionTypes } from "../actions/action-types";

interface priceActionType {
  type: string;
  payload: number[];
}

const price = (state=[2000,10000], action: priceActionType) => {
  switch (action.type) {
    case actionTypes.PRICE_RANGE_LOADED:
      return action.payload;
    default:
      return state;
  }
};
export default price;