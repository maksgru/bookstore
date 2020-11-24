import { store } from '..';
import { BookReviewsType, reviewsLoaded } from '../actions/rewiewActions';
import axios from './axios';

export const getReviews = async (bookId: number) => {
  const reviews: BookReviewsType = await axios.get('/review', { params: { bookId } });
  store.dispatch(reviewsLoaded(reviews));
};

export interface SetReviewType {
  bookId: number;
  userId: number;
  grade: number;
  comment?: string;
};

export const setReview = async (review: SetReviewType) => {
  const reviews: BookReviewsType = await axios.post('/review', { ...review });
  store.dispatch(reviewsLoaded(reviews));
};

export const patchReview = async (review: SetReviewType) => {
  const reviews: BookReviewsType = await axios.patch('/review', { ...review });
  store.dispatch(reviewsLoaded(reviews))
};

export const deleteReview = async (review: {userId: number; bookId: number}) => {
  const reviews: BookReviewsType = await axios.delete('/review', { params:{ ...review }});
  store.dispatch(reviewsLoaded(reviews))
}