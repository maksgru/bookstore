import React, { useState } from "react";
import { Form, Button, Row } from "react-bootstrap";
import { setReview, SetReviewType } from "../../../api/reviewApi";
import { RootState } from "../../../reducers";
import { useSelector } from 'react-redux';

const CommentForm = () => {
  const { userId, bookId } = useSelector((state: RootState) => ({
    userId: state.auth.id,
    bookId: state.bookPage.book.id
  }))
  const [isFormShow, setFormShow] = useState(false);
  const [comment, setComment] = useState("");
  const [grade, setGrade] = useState(1);
  const stars = Array.from(Array(5).keys());

  const textAreaHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setComment(value);
  };

  const handleClick = (e: React.FocusEvent<HTMLElement>) => {
    const value = e.target.id;
    setGrade(+value+1);
  };

  const toggleForm = () => {
    setFormShow(true);
  };
  const submitForm = async () => {
    const review: SetReviewType = {
      userId,
      bookId,
      grade,
      comment
    };
    setReview(review);
    setComment('');
    setGrade(0);
    setFormShow(false);
  };
  let handleForm = isFormShow ? submitForm : toggleForm;

  return (
    <div className="mt-4">
      {isFormShow && (
        <Form>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control
              onChange={textAreaHandleChange}
              as="textarea"
              rows={3}
            />
          </Form.Group>
          <div>
      <strong>Rating</strong>
      <Row className="mt-1 ml-1">
        {stars.map((item) => {
          const starType = item >= grade ? '-o' : '';
          return (
            <div key={item + "q"}>
              <Button
                onFocus={handleClick}
                id={item.toString()}
                variant="outline-warning btn-tog btn-bdnone star-rat mb-2"
                size="sm"
              >
                <i className={`fa fa-star${starType} fa-lg`} aria-hidden="true" />
              </Button>
            </div>
          );
        })}
      </Row>
    </div>
          <Button
            onClick={() => setFormShow(false)}
            variant="outline-danger float-right ml-3"
            size="sm"
          >
            <span>
              Cancel
              <i className="fa fa-ban fa-lg ml-2" aria-hidden="true" />
            </span>
          </Button>
        </Form>
      )}
      <Button onClick={handleForm} variant="outline-info mb-3 float-right" size="sm">
        <span>
          Add feedback
          <i className="fa fa-pencil-square-o fa-lg ml-2" aria-hidden="true" />
        </span>
      </Button>
    </div>
  );
};
export default CommentForm;
