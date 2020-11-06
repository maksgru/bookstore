import * as React from "react";
import { Container, Card, Row, Col, Image, Figure } from "react-bootstrap";

const BookPage = () => {
  return (
    <Container>
      <Card>
        <Card.Header as="h5">Robert Martin</Card.Header>
        <Container className="mt-2">
          <Row>
            <Col>
              <Image
                src="https://images-na.ssl-images-amazon.com/images/I/41-+g1a2Y1L._SX375_BO1,204,203,200_.jpg"
                rounded
              />
            </Col>
            <Col>
              <Row>
                {Array.from(Array(4).keys()).map((item) => (
                  <Figure key={item + "d"} className="mx-2">
                    <Figure.Image
                      width={171}
                      height={180}
                      alt="171x180"
                      src="https://images-na.ssl-images-amazon.com/images/I/41-+g1a2Y1L._SX375_BO1,204,203,200_.jpg"
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
