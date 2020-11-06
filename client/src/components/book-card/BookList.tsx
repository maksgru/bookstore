import * as React from "react";
import { Row, Col, CardGroup } from "react-bootstrap";
import PaginationForm from "./PaginationForm";
import BookCard from "./BookCard";

const BookList = () => {
  return (
    <Col>
      <CardGroup>
        {Array.from(Array(9).keys()).map((item) => (
          <Col key={item + "h"}>
            <BookCard />
          </Col>
        ))}
      </CardGroup>

      <Row className="justify-content-center">
        <PaginationForm />
      </Row>
    </Col>
  );
};
export default BookList;
