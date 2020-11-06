import { actionTypes } from './action-types'

export interface book {
  id: number,
  imgUrl: string,
  author: string,
  title: string,
  owner: string
}

export const booksLoaded = (books: book[] ) => ({
  type: actionTypes.BOOKS_LOAD_SUCCESS,
  books
});
