import axios from 'axios';

export default class BookService {
  getBooks = async () => {
    try {
      const books = await axios.get('api/books');
      return books;
    } catch (err) {
      console.log('books fetch failure', err)
      return err;
    }
  };
}