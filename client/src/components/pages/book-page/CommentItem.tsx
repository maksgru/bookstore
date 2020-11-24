import React, { useState } from "react";
import { Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import { reviewType } from "../../../actions/rewiewActions";
import {
  SetReviewType,
  patchReview,
  deleteReview,
} from "../../../api/reviewApi";
import { RootState } from "../../../reducers";
import ChangeComment from "./ChangeComment";
import TextForm from "./TextForm";

interface CommentItemType {
  review: reviewType;
}

const CommentItem = ({ review }: CommentItemType) => {
  const [isFormShow, setFormShow] = useState(false);

  const { userId, bookId } = useSelector((state: RootState) => ({
    bookId: state.bookPage.book.id,
    userId: state.auth.id,
  }));

  const handleComment = () => {
    setFormShow(true);
  };

  const formHandler = (text: string, grade: number) => {
    const review: SetReviewType = {
      userId,
      bookId,
      grade,
      comment: text,
    };
    patchReview(review);
    setFormShow(false);
  };

  const deleteComment = () => {
    const review: { userId: number; bookId: number } = {
      userId,
      bookId,
    };
    deleteReview(review);
  };

  const isCommentChangeble = userId === review.reviewer.id;
  return (
    <>
      {isFormShow ? (
        <TextForm
          submitForm={formHandler}
          toggleForm={setFormShow}
          initialValue={review.comment}
          initialGrade={review.grade}
        />
      ) : (
        <>
          {isCommentChangeble && (
            <ChangeComment
              handleChange={handleComment}
              handleDelete={deleteComment}
            />
          )}
          <div className="float-left">{review.comment}</div>
          <div className="float-right">
            <Badge className="align-middle">{review.reviewer.name}</Badge>
          </div>
          <span className="mx-4 float-right">
            {Array.from(Array(5).keys()).map((item) => {
              const idx = +item < review.grade ? "" : "-o";
              return (
                <i
                  key={item + "y"}
                  className={`fa fa-star${idx} text-warning  align-middle`}
                  aria-hidden="true"
                />
              );
            })}
          </span>
        </>
      )}
    </>
  );
};
export default CommentItem;
