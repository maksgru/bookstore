import { authorsLoaded } from '../actions/authorActions';
import { bookDetailsType, bookPageLoaded, booksLoaded } from '../actions/bookActions';
import { bookType } from '../actions/bookActions';
import { favoritesLoaded } from '../actions/favoritesActions';
import { genersLoaded } from '../actions/generActions';
import { priceLoaded } from '../actions/priceActions';
import { socket } from '../components/navbar/UserIcon';
import { store } from '../index';

import axios from './axios';

interface getAllType {
  sortTarget?: string;
  direction?: string;
  gener?: string;
  authors?: string[];
  price?: string;
  rating?: number;
  page?: number;
};

export const getAll = async (data?: getAllType) => {
const books: bookType[] = await axios.get('/books', { params: {...data}  });
store.dispatch(booksLoaded(books))
return books;
};

export const getBook = async (id: number) => {
  const bookDetails: bookDetailsType = await axios.get(`/books/id`, { params: { id } });
  store.dispatch(bookPageLoaded(bookDetails))
};

export const setBookDescription = async (id: number, description: string) => {
  const data: string = await axios.patch('/books/id', { id , description });
  return data;
};

export const addNewBook = async (formData: FormData) => {
  const res = await axios("/books", {
    method: "post",
    data: formData,
    headers: {
      "content-type": "multipart/form-data",
    },
  });
  return res;
};

export const handleFavorites = async (bookId: number, type: string) => {
  if (type === 'add') {
    const books: bookType[] = await axios.post('/favorites', { bookId, type });
    store.dispatch(favoritesLoaded(books));
    socket.emit('bookCreated'); // replace to addNewBook function
  }
  if (type === 'del') {
    const books: bookType[] = await axios.delete('/favorites', { params: { bookId, type } })
    store.dispatch(favoritesLoaded(books));
  }
};

export const getFavorites = async () => {
  const favoriteBooks: bookType[] = await axios.get('/favorites');
  store.dispatch(favoritesLoaded(favoriteBooks));
};

interface dataType {
  authorNames: string[];
  generNames: string[];
  priceRange: number[];
}

export const getData = async () => {
  const data: dataType = await axios.get('/data');
  store.dispatch(authorsLoaded(data.authorNames));
  store.dispatch(genersLoaded(data.generNames));
  store.dispatch(priceLoaded(data.priceRange))
};
getData();
      