import { actionTypes } from './action-types'

export interface bookType {
  id: number,
  bookIcon: string,
  author: string,
  name: string,
  description: string,
  rating: number,
  price: number,
  userId: number
}

export interface bookImageType {
  id: number,
  url: string,
  bookId: number
}

export interface bookDetailsType {
    book: bookType,
    bookImages: bookImageType[]
}
export const booksRequested = () => ({
  type: actionTypes.BOOKS_LIST_REQUEST
});

export const booksLoaded = (books: bookType[]) => ({
  type: actionTypes.BOOKS_LIST_SUCCESS,
  payload: books
});
export const booksLoadError = (error: any) => ({
  type: actionTypes.BOOKS_LIST_FAILURE,
  payload: error
});

export const bookPageLoaded = (bookDedails: bookDetailsType) => ({
  type: actionTypes.BOOK_DETAILS_SUCCESS,
  payload: bookDedails
});
