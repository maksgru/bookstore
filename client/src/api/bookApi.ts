import { authorsLoaded } from '../actions/authorActions';
import { bookDetailsType, booksLoaded } from '../actions/bookActions';
import { bookType } from '../actions/bookActions';
import { genersLoaded } from '../actions/generActions';
import { store } from '../index';

import axios from './axios';

export const getAll = async (data: any={}) => {
const books: bookType[] = await axios.get('/books', { params: {...data}  });
store.dispatch(booksLoaded(books))
return books;
};

export const getBook = async (id: number) => {
  const bookDetails: bookDetailsType = await axios.get(`/books/id`, { params: { id } });
  return bookDetails;
};

export const setBookDescription = async (id: number, description: string) => {
  const data: string = await axios.patch('/books/id', { params: { id }, description });
  return data;
};

export const addNewBook = async (formData: any) => {
  const res = await axios("/books", {
    method: "post",
    data: formData,
    headers: {
      "content-type": "multipart/form-data",
    },
  });
  return res;
};

export const getData = async () => {
  const data: any = await axios.get('/data');
  store.dispatch(authorsLoaded(data.authorNames));
  store.dispatch(genersLoaded(data.generNames));
};
getData();
      