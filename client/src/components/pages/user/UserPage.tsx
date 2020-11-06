import React from "react";
import {
  Container,
  Col,
  Image,
  Nav,
  Card,
  CardGroup,
} from "react-bootstrap";
import AddBookTab from "./profile-tabs/AddBookTab";

const UserPage = () => {
  return (
    <Container>
      <CardGroup className="mt-4">
        <Card style={{ maxWidth: "15rem" }}>
          <Card.Header style={{ height: "3.4rem" }}>My profile</Card.Header>
          <Col className="mt-2 text-center">
            <Image
              src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-128.png"
              roundedCircle
            />
          </Col>
          <Card.Body>
            <Card.Title>John Doe</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>
            <Nav variant="tabs" defaultActiveKey="#first">
              <Nav.Item>
                <Nav.Link href="#first">Add book</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#second">Favorite books</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#link">Cart</Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          <Card.Body>
            <Card.Title>Add Book</Card.Title>
            <AddBookTab />
          </Card.Body>
        </Card>
      </CardGroup>
    </Container>
  );
};

export default UserPage;
