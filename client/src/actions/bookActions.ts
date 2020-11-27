import { actionTypes } from './action-types'

export interface bookType {
  id: number;
  bookIcon: string;
  writer: { name: string };
  name: string;
  description: string;
  rating: number;
  price: number;
  userId: number;
  user: [{id: number}];
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

export const booksLoaded = (books: bookType[]) => ({
  type: actionTypes.BOOKS_LIST_SUCCESS,
  payload: books
});

export const bookPageLoaded = (bookDedails: bookDetailsType) => ({
  type: actionTypes.BOOK_DETAILS_SUCCESS,
  payload: bookDedails
});

export const bookImagesLoaded = (bookImages: bookImageType[]) => ({
  type: actionTypes.BOOK_IMAGES_LOADED,
  payload: bookImages
});