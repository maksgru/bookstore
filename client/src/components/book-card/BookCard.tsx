import React from "react";
import { Button, Card } from "react-bootstrap";

const BookCard = () => {
  return (
    <Card style={{ minWidth: "15rem", marginBottom: "20px" }}>
      <Card.Img
        variant="top"
        src="https://www.transparentpng.com/thumb/book/dvATkC-download-book.png"
      />
      <Card.Body>
        <Card.Title>Book name which can be larger than card wide</Card.Title>
        <Card.Text>Author name</Card.Text>
      </Card.Body>
      <Card.Footer className="p-1">
        <div className="mt-2 ml-2 float-left">
          {Array.from(Array(5).keys()).map((item) => (
            <div key={item + "a"} className="text-warning float-left mx-1">
              <i className="fa fa-star" aria-hidden="true" />
            </div>
          ))}
        </div>
        <Button variant="outline-info float-right btn-tog btn-bdnone m-0">
          <i className="fa fa-shopping-bag" aria-hidden="true" />
        </Button>
        <Button variant="outline-danger float-right btn-tog btn-bdnone m-0">
          <i className="fa fa-heart-o" aria-hidden="true" />
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default BookCard;
