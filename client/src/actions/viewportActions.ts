import { actionTypes } from "./action-types";

export interface ViewportWidthType{
  type: string;
  viewportWidth: number
}

export const setViewportWidth = (viewportWidth: number): ViewportWidthType => ({
  type: actionTypes.SET_VIEWPORT_WIDTH,
  viewportWidth
});