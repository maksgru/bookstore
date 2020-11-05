import React from "react";
import { Form } from "react-bootstrap";

const SortForm = () => {
  return (
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
  );
};

export default SortForm;
