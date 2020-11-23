import React from "react";
import { ListGroup, Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import { reviewType } from "../../../actions/rewiewActions";
import { RootState } from "../../../reducers";
import ChangeComment from "./ChangeComment";
import CommentForm from "./CommentForm";
import ReplyForm from "./ReplyForm";

const Comment = () => {
  const { reviews, isAuth, userId, reviewUserId } = useSelector((state: RootState) => ({
    reviews: state.reviews.bookReviews,
    reviewUserId: state.reviews.reviewerId,
    isAuth: state.auth.isLoggedIn,
    userId: state.auth.id
  }));

  const isReviewPossible = (userId !== reviewUserId) && isAuth;

  return (
    <>
      <ListGroup>
        {isReviewPossible && <CommentForm />}
        {reviews.map((review: reviewType) => {
          return (
            <ListGroup.Item key={review.comment + review.grade}>
              <div className="float-left">{review.comment}</div>
              <div className="float-right">
                <Badge>{review.reviewer.name}</Badge>
              </div>
              <span className="mx-4 float-right">
                {Array.from(Array(5).keys()).map((item) => {
                  const idx = +item < review.grade ? "" : "-o";
                  return (
                    <i
                      key={item + "y"}
                      className={`fa fa-star${idx} text-warning`}
                      aria-hidden="true"
                    />
                  );
                })}
              </span>
              {!isReviewPossible && <ChangeComment />}
              {isAuth && <ReplyForm/>}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </>
  );
};
export default Comment;
