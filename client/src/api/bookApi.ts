import { bookDetailsType, bookPageLoaded, booksLoaded } from '../actions/bookActions';
import { bookType } from '../actions/bookActions';
import { favoritesLoaded } from '../actions/favoritesActions';
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
  authors: [{name: string}];
  geners: [{name: string}];
  priceRange: number[];
}

interface GetDataType {
  authors?: boolean;
  geners?: boolean;
  price?: boolean;
};

/** 
  * @param {boolean} params.authors - optional
  * @param {boolean} params.geners - optional
  * @param {boolean} params.price - optional
  * @returns {object} {[authorNames], [generNames], [priceRange]} 
  */
export const getData = async (params: GetDataType) => {
  const data: dataType = await axios.get('/data', { params: {...params} });
  return data;
};