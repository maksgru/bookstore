import { actionTypes } from "./action-types";

export const error = () => ({type: actionTypes.REQUEST_FAILURE});
export const success = () => ({typr: actionTypes.REQUEST_SUCCESS});