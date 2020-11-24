import React from "react";
import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { reviewType } from "../../../actions/rewiewActions";
import { RootState } from "../../../reducers";
import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";
// import ReplyForm from "./ReplyForm";

const Comment = () => {

  const { reviews, isAuth, userId, reviewUserId } = useSelector((state: RootState) => ({
    reviews: state.reviews.bookReviews,
    reviewUserId: state.reviews.reviewerId,
    isAuth: state.auth.isLoggedIn,
    userId: state.auth.id
  }));
// todo: useEffect if userId recall review route

  const isReviewPossible = (userId !== reviewUserId) && isAuth;
  return (
    <>
      <ListGroup>
        {isReviewPossible && <CommentForm />}
        {reviews.map((review: reviewType) => {
          return (
            <ListGroup.Item key={review.comment + review.grade}>
             <CommentItem review={review} />
              {/* {isAuth && <ReplyForm/>} */}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </>
  );
};
export default Comment;
