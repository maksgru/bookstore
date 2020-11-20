import React from "react";
import { ListGroup, Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import { reviewType } from "../../../actions/rewiewActions";
import CommentForm from "./CommentForm";

const Comment = () => {
  const { reviews } = useSelector((state: any) => ({
    reviews: state.reviews,
  }));

  return (
    <>
      <CommentForm />
      <ListGroup>
        {reviews.map((review: reviewType) => {
          return (
            <ListGroup.Item key={review.comment}>
              <span>{review.comment}</span>
              <Badge className="float-right">{review.reviewer.name}</Badge>
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
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </>
  );
};
export default Comment;
