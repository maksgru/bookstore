import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const CommentForm = () => {
  const [isFormShow, setFormShow] = useState(false);
  const [comment, setComment] = useState("");

  const textAreaHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setComment(value);
  };

  const toggleForm = () => {
    setFormShow(true);
  };
  const submitForm = async () => {
    
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
          <Button
            onClick={() => setFormShow(false)}
            variant="outline-danger"
            size="sm"
            className="float-right"
          >
            <span>
              Cancel
              <i className="fa fa-ban fa-lg ml-2" aria-hidden="true" />
            </span>
          </Button>
        </Form>
      )}
      <Button onClick={handleForm} variant="outline-info mb-3" size="sm">
        <span>
          Add feedback
          <i className="fa fa-pencil-square-o fa-lg ml-2" aria-hidden="true" />
        </span>
      </Button>
    </div>
  );
};
export default CommentForm;
