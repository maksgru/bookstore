import { bookDetailsType } from '../actions/bookActions';
import { bookType } from '../actions/bookActions';

import axios from './axios';

const path = '/api';

export const getAll = async () => {
  const books: bookType[] = await axios.get(`${path}/books`);
  return books;

};

export const getBook = async (id: number) => {
  const bookDetails: bookDetailsType = await axios.get(`${path}/books/id`, { params: { id } });
  return bookDetails;
};

