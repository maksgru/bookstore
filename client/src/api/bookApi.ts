import { bookDetailsType, bookPageLoaded, booksLoaded } from '../actions/bookActions';
import { bookType } from '../actions/bookActions';
import { favoritesLoaded } from '../actions/favoritesActions';
import { setPageCount } from '../actions/pageActions';
import { socket } from '../components/navbar/UserIcon';
import { store } from '../index';
import axios from './axios';

interface getAllBooksType {
  authors?: string[];
  price?: string;
};

interface BookListType {
count: number;
rows: bookType[];
}

export const getAllBooks = async (data?: getAllBooksType) => {
  const { sortTarget, direction } = store.getState().sort;
  const { page } = store.getState().page;
  const { gener } = store.getState().filter;
  const { price } = store.getState().filter;
  const { rating } = store.getState().filter;
  const { authors } = store.getState().filter;
const bookList: BookListType = await axios.get('/books', { params: {...data, sortTarget, direction, page, gener, price, rating, authors}  });
store.dispatch(booksLoaded(bookList.rows))
store.dispatch(setPageCount(bookList.count));
return bookList;
};

export const getBook = async (id: number) => {
  const bookDetails: bookDetailsType = await axios.get(`/books/:${id}`);
  store.dispatch(bookPageLoaded(bookDetails))
};

export const setBookDescription = async (id: number, description: string) => {
  const data: string = await axios.patch(`/books/:${id}`, { description });
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
  }
  if (type === 'del') {
    const books: bookType[] = await axios.delete('/favorites', { params: { bookId, type } })
    store.dispatch(favoritesLoaded(books));
  }
  const id = store.getState().auth.id;
  socket.emit('bookCreated', {'userId': `${id}`});
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
  * @param {object} params.authors - 
  * @param {boolean} params.geners - optional
  * @param {boolean} params.price - optional
  * @returns {object} {[authors], [geners], [priceRange]} 
  */
export const getData = async (params: GetDataType) => {
  const data: dataType = await axios.get('/data', { params: {...params} });
  return data;
};