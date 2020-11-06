import React from "react";
import { Form, Row } from "react-bootstrap";

const SortForm = () => {
  return (
    <Row className="justify-content-end mr-1">
      <Form inline>
        <Form.Label className="my-1 mr-2" htmlFor="sortBy">
          Sort by
        </Form.Label>
        <Form.Control
          size="sm"
          as="select"
          className="my-1 mr-sm-2"
          id="sortBy"
          custom
        >
          <option value="0">Name</option>
          <option value="1">Rating</option>
          <option value="2">Price</option>
        </Form.Control>
      </Form>
      </Row>
  );
};

export default SortForm;
