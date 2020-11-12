import { bookDetailsType } from '../actions/bookActions';
import { bookType } from '../actions/bookActions';

import axios from './axios';

export const getAll = async () => {
  const books: bookType[] = await axios.get(`/books`);
  return books;

};

export const getBook = async (id: number) => {
  const bookDetails: bookDetailsType = await axios.get(`/books/id`, { params: { id } });
  return bookDetails;
};

export const setBookDescription = async (id: number, description: string) => {
  const data: string = await axios.patch('/books/id', { params: { id }, description });
  return data;
}

export const addNewBook = async (formData: any) => {
  const res = await axios("/upload/book", {
    method: "post",
    data: formData,
    headers: {
      "content-type": "multipart/form-data",
    },
  });
  return res;
}