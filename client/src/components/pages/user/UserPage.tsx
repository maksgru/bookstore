import React, { useState } from "react";
import {
  Container,
  Nav,
  Card,
  CardGroup,
  Figure,
  Form,
  Button,
} from "react-bootstrap";
import { connect } from "react-redux";
import AddBookTab from "./profile-tabs/AddBookTab";
import axios from "../../../api/axios";
interface UserPageProps {
  iconUrl: string;
  userName: string;
}

const UserPage = (props: UserPageProps) => {
  const [file, setFile] = useState("");
  const formData = new FormData();
  const submitUserImg = (e: any) => {
    // e.preventDefault();
    formData.append("filedata", file);
    axios("/upload/userimg", {
      method: "post",
      data: formData,
      headers: {
        "content-type": "multipart/form-data",
      },
    });
  };

  const handleChange = (e: any) => {
    e.preventDefault();
    const file = e.target.files[0];
    setFile(file);
  };

  return (
    <Container>
      <CardGroup className="mt-4">
        <Card style={{ maxWidth: "15rem" }}>
          <Card.Header style={{ height: "3.4rem" }}>My profile</Card.Header>
          <Figure className="text-center mt-3">
            <Figure.Image
              width={200}
              height={200}
              alt="171x180"
              src={props.iconUrl}
              // roundedCircle
            />
          </Figure>
          <Card.Body>
            <Card.Title>{props.userName}</Card.Title>
            <Form>
              <Form.Group>
                <Form.File
                  onChange={handleChange}
                  id="exampleFormControlFile1"
                  label="Example file input"
                />
                <Button
                  className="mt-2"
                  as="input"
                  onClick={submitUserImg}
                  type="submit"
                  value="Load"
                  size="sm"
                />
              </Form.Group>
            </Form>
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

const mstp = (state: any) => ({
  iconUrl: state.auth.userImg,
  userName: state.auth.name,
});

export default connect(mstp)(UserPage);
