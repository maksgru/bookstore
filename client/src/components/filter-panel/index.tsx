import React from "react";
import { Form, Col } from "react-bootstrap";
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
    <div className="p-2">
      <div className="mb-3">
        <strong>Genres</strong>
        <div>
          {Array.from(Array(10).keys()).map((item) => {
            return (
              <div className="ml-4 font-weight-bold" key={item + "s"}>
                literature genre
              </div>
            );
          })}
        </div>
      </div>
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
    </div>
  );
};

export default FilterPanel;
