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
      <Form className="mb-2">
        <strong>Authors</strong>
        {authors.map((author: string) => (
          <Form.Check
          className="ml-1"
            key={author}
            type="checkbox"
            id="authorNme"
            label={author}
          />
        ))}
      </Form>
      <Form style={{maxWidth: '100px'}}>
        <strong>Price</strong>

            <Form.Group controlId="rangeMin" className="ml-1 mt-1">
              <Form.Control type="number" size="sm" placeholder="min" />
            </Form.Group>
  

 
            <Form.Group controlId="rangeMax" className="ml-1">
              <Form.Control type="number" size="sm" placeholder="max" />
            </Form.Group>
 
      </Form>
    </Col>
  );
};

export default FilterPanel;
