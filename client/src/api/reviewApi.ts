import { store } from '..';
import { reviewsLoaded, reviewType } from '../actions/rewiewActions';
import axios from './axios';

export const getReviews = async (bookId: number) => {
  const reviews: reviewType[] = await axios.get('/review', { params: { bookId } });
  store.dispatch(reviewsLoaded(reviews));
};

export interface SetReviewType {
  bookId: number;
  userId: number;
  grade: number;
  comment?: string;
};

export const setReview = async (review: SetReviewType) => {
  const reviews: reviewType[] = await axios.post('/review', { ...review });
  store.dispatch(reviewsLoaded(reviews));
};