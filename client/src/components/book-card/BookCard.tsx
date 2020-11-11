import React from "react";
import { Card } from "react-bootstrap";
import CardFooter from './CardFooter';
import { Link } from "react-router-dom";
import { bookType } from "../../actions/bookActions";

interface Bprops {
  book: bookType
}
const BookCard = ({ book }: Bprops) => {
  const loadBookPage = () => {
    localStorage.setItem('bookId', book.id.toString())
  }
  return (
    <Card
      style={{ minWidth: "14rem", maxWidth: "16rem", marginBottom: "20px" }}
    >
      <Card.Header>
        <strong>{book.name}</strong>
      </Card.Header>
      <Link
        to="/book"
        onClick={loadBookPage}
        style={{ textDecoration: "none" }}
      >
        <Card.Img variant="top" className="p-3" src={book.bookIcon} />
        <Card.Body className="bk-card pt-0">
          <Card.Text>{book.author}</Card.Text>
        </Card.Body>
      </Link>
      <CardFooter />
    </Card>
  );
};


export default BookCard;
