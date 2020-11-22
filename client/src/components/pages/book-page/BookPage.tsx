import React, { useEffect, useState } from "react";
import { Container, Card, Row, Col, Image, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getBook } from "../../../api/bookApi";
import { bookImageType, bookPageLoaded } from "../../../actions/bookActions";
import DescriptionForm from "./DescriptionForm";
import BookImages from "./BookImages";
import AddImageForm from "./AddImageForm";
import Comment from "./Comment";
import { getReviews } from "../../../api/reviewApi";
import { RootState } from "../../../reducers";

import {io} from 'socket.io-client';
const socket = io('http://localhost:4000/');
const emitData = () => {
  socket.emit('clickBookButton');
};

const BookPage = () => {
  const dispatch = useDispatch();
  const [bookIcon, setBookIcon] = useState("");
  let [ inc, setInc ] = useState(0)
  const { book, bookImages, userId } = useSelector((state: RootState) => ({
    book: state.bookPage.book,
    bookImages: state.bookPage.bookImages,
    isAuth: state.auth.isLoggedIn,
    userId: state.auth.id,
  }));

  const message = () => {
    setInc(inc++)
    console.log('hello from socket io')
  }

  useEffect(() => {
    socket.on('bookButtonClicked', message)
    const bookId = +localStorage.getItem("bookId")!;
    const getData = async () => {
      const data = await getBook(bookId);
      dispatch(bookPageLoaded(data));
      setBookIcon(data.book.bookIcon);
    };
    getData();
    getReviews(bookId);
  }, [dispatch]);

  const images = [
    book.bookIcon,
    ...bookImages.map((image: bookImageType) => image.url),
  ];

  const handleImage = (image: string) => {
    setBookIcon(image);
  };
  const isBookUsers = userId === book.userId;
  return (
    <Container>
      <Card>
        <Card.Header as="h5">
          {book.writer.name}
          {isBookUsers && <AddImageForm />}
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
              <BookImages images={images} toggleImage={handleImage} />
            </Col>
          </Row>
        </Container>
        <Card.Body>
          <Card.Title>
            {book.name}
            <Button onClick={emitData} className="float-right" variant="outline-warning" size="sm">
              <strong className="text-danger">
                {`$ ${(book.price / 100).toFixed(2)} ${inc}`}
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
