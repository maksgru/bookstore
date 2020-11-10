import { bookPage } from '../actions/bookActions';
import axios from './axios';

const path = '/api';

export const getAll = () => {
  return axios.get(`${path}/books`);
}


export const getBook = (id: number) => {
  return axios.get(`${path}/books/id`, {params:{id}})
}

