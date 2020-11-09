import { actionTypes } from './action-types'

export interface book {
  id: number,
  imgUrls: string[],
  author: string,
  title: string,
  owner: string
}

export const booksLoaded = (books: any) => ({
  type: actionTypes.BOOKS_LOAD_SUCCESS,
  payload: books
});
export const booksRequested = () => ({
  type: actionTypes.BOOKS_LOAD_REQUEST
});
export const booksLoadError = (error: any) => ({
  type: actionTypes.BOOKS_LOAD_FAILURE,
  payload: error
  
});