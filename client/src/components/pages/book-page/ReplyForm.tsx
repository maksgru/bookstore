import React, { useState } from "react";
import { Form, Button, Badge, Nav } from "react-bootstrap";

const ReplyForm = () => {
  const [replyText, setReplyText] = useState("");
  const [isFormShow, toggleForm] = useState(false);
  const textAreaHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setReplyText(value);
  };

  const submitReply = () => {};

  return (
    <div className="mt-4">
      <Nav.Link className="p-0">
      <Badge onClick={() => toggleForm(true)} className="float-right">
        Reply
      </Badge>
      </Nav.Link>
      { isFormShow && ( 
      <>
        <Form>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Control
            onChange={textAreaHandleChange}
            as="textarea"
            rows={3}
          />
        </Form.Group>
        <Button
          onClick={() => toggleForm(false)}
          variant="outline-danger float-right ml-3"
          size="sm"
        >
          <span>
            Cancel
            <i className="fa fa-ban fa-lg ml-2" aria-hidden="true" />
          </span>
        </Button>
      </Form>
      <Button
        onClick={submitReply}
        variant="outline-info mb-3 float-right"
        size="sm"
      >
        <span>
          Add feedback
          <i className="fa fa-pencil-square-o fa-lg ml-2" aria-hidden="true" />
        </span>
      </Button>
      </>
      )}
    </div>
  );
};
export default ReplyForm;
