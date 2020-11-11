import React, { useEffect } from "react";
import { Container, Card, Row, Col, Image, Figure } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getBook } from "../../../api/bookApi";
import { bookPageLoaded } from "../../../actions/bookActions";

const BookPage = () => {
  const dispatch = useDispatch();
  const { book, bookImages } = useSelector((state: any) => ({
    book: state.bookPage.book,
    bookImages: state.bookPage.bookImages,
  }));
  useEffect(() => {
    const bookId = +localStorage.getItem("bookId")!;
    const getData = async () => {
      const data = await getBook(bookId);
      dispatch(bookPageLoaded(data));
    };
    getData();
  }, [dispatch]);
  return (
    <Container>
      <Card>
        <Card.Header as="h5">{book.author}</Card.Header>
        <Container className="mt-2">
          <Row>
            <Col>
              <Image src={book.bookIcon} rounded />
            </Col>
            <Col>
              <Row>
                {bookImages.map((image: any) => (
                  <Figure key={image.id} className="mx-2">
                    <Figure.Image
                      width={171}
                      height={180}
                      alt="171x180"
                      src={image.url}
                    />
                  </Figure>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
        <Card.Body>
          <Card.Title>{book.name}</Card.Title>
          <Card.Text>{book.description}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};
export default BookPage;
