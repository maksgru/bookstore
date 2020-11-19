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
  let fav = false;
  if (book.user[0]) {
    const user = book.user[0];
    fav = user.id === book.userId ? true : false;
    
  }
  return (
    <Card
      style={{ minWidth: "14rem", maxWidth: "16rem", marginBottom: "20px" }}
    >
      <Card.Header className="clip">
        <strong>{book.name}</strong>
      </Card.Header>
      <Link
        to="/book"
        onClick={loadBookPage}
        style={{ textDecoration: "none" }}
      >
        <Card.Img variant="top" className="p-3 mx-auto d-block" src={book.bookIcon} style={{maxHeight: '15rem', width: 'auto'}} />
        <Card.Body className="bk-card pt-0">
          <Card.Text>
            {book.writer.name}
            <strong className="float-right text-info">{`$ ${(book.price / 100).toFixed(2)}`}</strong>
          </Card.Text>
        </Card.Body>
      </Link>
      <CardFooter rating={book.rating} id={book.id} isFav={fav} />
    </Card>
  );
};


export default BookCard;
