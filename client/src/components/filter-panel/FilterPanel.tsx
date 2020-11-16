import React from "react";
import { Form, Col } from "react-bootstrap";
import Geners from "./Geners";
import RatingForm from "./Rating";

const FilterPanel = () => {
  const authors: any = [
    "Robert Martin",
    "Mark Twain",
    "William Shakespeare",
    "Ernest Hemingway",
    "Rudyard Kipling",
  ];
  return (
    <Col md={4} xs={6} lg={3}>
      <Geners />
      <RatingForm />
      <Form className="mb-3">
        <strong>Authors</strong>
        {authors.map((author: string) => (
          <Form.Check
            key={author}
            type="checkbox"
            id="authorNme"
            label={author}
          />
        ))}
      </Form>
      <Form>
        <strong>Range</strong>
        <Form.Group controlId="formBasicRange">
          <Form.Label>
            <Form.Control type="range" style={{width: "13rem"}} />
          </Form.Label>
        </Form.Group>

        <Form.Row>
          <Col md="6">
            <Form.Group controlId="rangeMin">
              <Form.Control type="number" size="sm" placeholder="min" />
            </Form.Group>
          </Col>

          <Col md="6">
            <Form.Group controlId="rangeMax">
              <Form.Control type="number" size="sm" placeholder="max" />
            </Form.Group>
          </Col>
        </Form.Row>
      </Form>
    </Col>
  );
};

export default FilterPanel;
