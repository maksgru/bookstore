import React from 'react'
import { Card } from "react-bootstrap";

const BookCard = () => {
  return (
      <Card style={{ width: "15rem", margin: "10px"}}>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
  );
};

export default BookCard;