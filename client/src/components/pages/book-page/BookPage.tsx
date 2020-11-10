import * as React from "react";
import { Container, Card, Row, Col, Image, Figure } from "react-bootstrap";
import { useSelector } from 'react-redux';

const BookPage = () => {
  const { book, bookImages } = useSelector((state: any) => ({
    book: state.bookPage.book,
    bookImages: state.bookPage.bookImages
  }))
  return (
    <Container>
      <Card>
        <Card.Header as="h5">Robert Martin</Card.Header>
        <Container className="mt-2">
          <Row>
            <Col>
              <Image
                src={book.bookIcon}
                rounded
              />
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
          <Card.Title>Clean Code</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};
export default BookPage;
