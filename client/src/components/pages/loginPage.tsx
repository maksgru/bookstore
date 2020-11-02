import React, { Component } from "react";
import AuthServise from '../../servises/authServise';
import { Container, Form, Button, Jumbotron } from "react-bootstrap";

export default class LoginPage extends Component {
  state: object = {
    email: "",
    password: "",
  };

  authServise = new AuthServise();

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({ [name]: value });
  };


  login = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = await this.authServise.login(this.state);
    console.log(data);

  };  

  render() {
    return (
      <Container fluid>
        <Jumbotron className="d-flex align-items-center justify-content-center">
              <Form onSubmit={this.login} style={{minWidth: "25%"}}>
              <div style={{textAlign: "center", marginBottom: "2rem"}}>
                <h1>book STORE</h1>
              </div>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    name="email"
                    onChange={this.handleChange}
                    type="email"
                    placeholder="Enter email"
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Control
                    name="password"
                    onChange={this.handleChange}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit" block>
                  Submit
                </Button>
              </Form>
        </Jumbotron>
      </Container>
    );
  }
}
