import { actionTypes } from './action-types'

export interface book {
  id: number,
  bookIcon: string,
  author: string,
  name: string,
  rating: number,
  userId: number
}

export interface bookImage {
  id: number,
  url: string,
  bookId: number
}

export interface bookPage {
    book: book,
    bookImages: bookImage[]
}

export const booksLoaded = (books: any) => ({
  type: actionTypes.BOOKS_LIST_SUCCESS,
  payload: books
});
export const booksRequested = () => ({
  type: actionTypes.BOOKS_LIST_REQUEST
});
export const booksLoadError = (error: any) => ({
  type: actionTypes.BOOKS_LIST_FAILURE,
  payload: error
  
});

export const bookPageLoaded = (book: any) => ({
  type: actionTypes.BOOK_PAGE_SUCCESS,
  payload: book
});