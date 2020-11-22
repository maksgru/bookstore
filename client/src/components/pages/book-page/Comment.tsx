import React, { useState } from "react";
import { ListGroup, Badge, Nav } from "react-bootstrap";
import { useSelector } from "react-redux";
import { reviewType } from "../../../actions/rewiewActions";
import { RootState } from "../../../reducers";
import CommentForm from "./CommentForm";
import ReplyForm from "./ReplyForm";

const Comment = () => {
  const [ isReplyFormShow, setReplyFormShow ] = useState(false);
  const { reviews, isAuth } = useSelector((state: RootState) => ({
    reviews: state.reviews,
    isAuth: state.auth.isLoggedIn,
  }));

  const toggleReplyForm = (isShow: boolean) => {
    setReplyFormShow(isShow);
  }

  return (
    <>
      <ListGroup>
        {isAuth && <CommentForm />}
        {reviews.map((review: reviewType) => {
          return (
            <ListGroup.Item key={review.comment + review.grade}>
              <div className="float-left">{review.comment}</div>
              <div className="float-right">
                <Badge>{review.reviewer.name}</Badge>
                <Nav.Link className="p-0">
                  <Badge onClick={() => toggleReplyForm(true)} className="float-right">Reply</Badge>
                </Nav.Link>
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
              {isReplyFormShow && <ReplyForm toggleForm={toggleReplyForm} />}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </>
  );
};
export default Comment;
