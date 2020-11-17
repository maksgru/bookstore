import React from "react";
import { Form, Col, Button } from "react-bootstrap";
import Authors from "./Authors";
import Geners from "./Geners";
import RatingForm from "./Rating";

const FilterPanel = () => {
  return (
    <Col md={4} xs={6} lg={3}>
      <Geners />
      <RatingForm />
      <Authors />
      <Form style={{maxWidth: '100px'}}>
        <strong>Price</strong>
            <Form.Group controlId="rangeMin" className="ml-1 mt-1">
              <Form.Control type="number" size="sm" placeholder="min" />
            </Form.Group>
            <Form.Group controlId="rangeMax" className="ml-1">
              <Form.Control type="number" size="sm" placeholder="max" />
            </Form.Group>
      </Form>
      <Button variant="outline-info" size="sm">
        <span>show books</span>
      <i className="fa fa-filter ml-2" aria-hidden="true" />
      </Button>
    </Col>
  );
};

export default FilterPanel;
