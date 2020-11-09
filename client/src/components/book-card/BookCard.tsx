import React from "react";
import { Button, Card, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from 'react-router-dom';


const BookCard = ({ book }: any) => {
  return (
    <Card style={{ minWidth: "14rem", maxWidth: "16rem", marginBottom: "20px" }}>
      <Link to="/book" style={{ textDecoration: 'none' }}>
        <Card.Img
          variant="top"
          src=''
        />
        <Card.Body className="bk-card">
  <Card.Title>{book.name}</Card.Title>
  <Card.Text>{book.author}</Card.Text>
        </Card.Body>
      </Link>
      <Card.Footer className="p-1">
        <div className="mt-2 ml-2 float-left">
          {Array.from(Array(5).keys()).map((item) => (
            <div key={item + "a"} className="text-warning float-left mx-1">
              <i className="fa fa-star" aria-hidden="true" />
            </div>
          ))}
        </div>
        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Add to cart</Tooltip>}>
        <Button variant="outline-info float-right btn-tog btn-bdnone m-0">
          <i className="fa fa-shopping-bag" aria-hidden="true" />
        </Button>
        </OverlayTrigger>
        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Add to favorites</Tooltip>}>
        <Button variant="outline-danger float-right btn-tog btn-bdnone m-0">
          <i className="fa fa-heart-o" aria-hidden="true" />
        </Button>
        </OverlayTrigger>
      </Card.Footer>
    </Card>
  );
};

export default BookCard;
