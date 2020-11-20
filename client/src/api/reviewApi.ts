import { store } from '..';
import { reviewsLoaded, reviewType } from '../actions/rewiewActions';
import axios from './axios';

export const getReviews = async (bookId: number) => {
  const reviews: reviewType[] = await axios.get('/review', { params: { bookId } });
  store.dispatch(reviewsLoaded(reviews));
};