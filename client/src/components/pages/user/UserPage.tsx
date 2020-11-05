import React from "react";
import { Container, Col, Image, Nav, Card, CardGroup } from "react-bootstrap";

const UserPage = () => {
  return (
    <Container>
      <CardGroup>
          <Card style={{ maxWidth: "15rem" }}>
            <Col xs={6} md={4}>
              <Image
                src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-128.png"
                roundedCircle
              />
            </Col>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <Nav variant="tabs" defaultActiveKey="#first">
                <Nav.Item>
                  <Nav.Link href="#first">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#link">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#disabled" disabled>
                    Disabled
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
            </Card.Body>
          </Card>
      </CardGroup>
    </Container>
  );
};

export default UserPage;
