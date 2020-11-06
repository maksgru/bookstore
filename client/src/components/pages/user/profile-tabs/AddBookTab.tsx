import * as React from "react";
import { Form } from "react-bootstrap";
const AddBookTab = () => {
  return (
    <Form>
      <Form.Group>
        <Form.Control placeholder="Book Title" />
      </Form.Group>
      <Form.Group>
      <Form.Control placeholder="Book Author" />
      </Form.Group>
      <Form.Group>
        <Form.File id="exampleFormControlFile1" label="Choose book image" />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Book descriptin</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
  );
};

export default AddBookTab;
