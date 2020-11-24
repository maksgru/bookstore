import React, { useEffect, useState } from "react";
import { Container, Card, Row, Col, Image, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getBook } from "../../../api/bookApi";
import { bookImageType } from "../../../actions/bookActions";
import DescriptionForm from "./DescriptionForm";
import BookImages from "./BookImages";
import AddImageForm from "./AddImageForm";
import Comment from "./Comment";
import { getReviews } from "../../../api/reviewApi";
import { RootState } from "../../../reducers";



const BookPage = () => {
  const { book, bookImages, userId } = useSelector((state: RootState) => ({
    book: state.bookPage.book,
    bookImages: state.bookPage.bookImages,
    isAuth: state.auth.isLoggedIn,
    userId: state.auth.id,
  }));
  
  const [bookIcon, setBookIcon] = useState('');
  useEffect(() => {
    const bookId = +localStorage.getItem("bookId")!;
      getReviews(bookId);
      getBook(bookId);
      setBookIcon(book.bookIcon);
  }, [book.bookIcon]);

  const handleImage = (image: string) => {
    setBookIcon(image);
  };
  const isBookUsers = userId === book.userId;
  return (
    <Container>
      <Card>
        <Card.Header as="h5">
          {book.writer.name}
          {isBookUsers && <AddImageForm bookId={book.id} />}
        </Card.Header>
        <Container fluid className="mt-2">
          <Row className="justify-content-center">
            <Col md="6" sm="8" lg="4">
              <Row>
                <Image
                  style={{ maxHeight: "30rem", width: "auto" }}
                  src={bookIcon}
                  rounded
                />
              </Row>
              <BookImages images={[book.bookIcon, ...bookImages.map((img: bookImageType) => img.url)]} toggleImage={handleImage} />
            </Col>
          </Row>
        </Container>
        <Card.Body>
          <Card.Title>
            {book.name}
            <Button className="float-right" variant="outline-warning" size="sm">
              <strong className="text-danger">
                {`$ ${(book.price / 100).toFixed(2)}`}
                <i
                  className="fa fa-shopping-cart fa-lg ml-2"
                  aria-hidden="true"
                />
              </strong>
            </Button>
          </Card.Title>
          <DescriptionForm
            description={book.description}
            bookId={book.id}
            isShow={isBookUsers}
          />
          <Comment />
        </Card.Body>
      </Card>
    </Container>
  );
};
export default BookPage;
