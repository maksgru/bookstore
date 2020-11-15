import React, { useEffect } from "react";
import { Container, Card, Row, Col, Image, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getBook } from "../../../api/bookApi";
import { bookPageLoaded } from "../../../actions/bookActions";
import DescriptionForm from "./DescriptionForm";
import BookImages from "./BookImages";
import AddImageForm from "./AddImageForm";

const BookPage = () => {
  const dispatch = useDispatch();
  const { book, bookImages, isAuth } = useSelector((state: any) => ({
    book: state.bookPage.book,
    bookImages: state.bookPage.bookImages,
    isAuth: state.auth.isLoggedIn,
  }));
  useEffect(() => {
    const bookId = +localStorage.getItem("bookId")!;
    const getData = async () => {
      const data = await getBook(bookId);
      dispatch(bookPageLoaded(data));
    };
    getData();
  }, [dispatch]);
  const images = [book.bookIcon, ...bookImages.map((image: any) => image.url)];
  return (
    <Container>
      <Card>
        <Card.Header as="h5">
          {book.author}
          {isAuth && <AddImageForm />}
        </Card.Header>
        <Container fluid className="mt-2">
          <Row className="justify-content-center">
            <Col md="6" sm="8" lg="4">
              <Row>
                <Image src={book.bookIcon} rounded />
              </Row>
              <BookImages images={images} />
            </Col>
          </Row>
        </Container>
        <Card.Body>
          <Card.Title>
            {book.name}
            <Button className="float-right" variant="outline-warning" size="sm">
              <strong className="text-danger">
                $ 200
                <i
                  className="fa fa-shopping-cart fa-lg ml-2"
                  aria-hidden="true"
                />
              </strong>
            </Button>
          </Card.Title>
          <DescriptionForm description={book.description} bookId={book.id} />
        </Card.Body>
      </Card>
    </Container>
  );
};
export default BookPage;
