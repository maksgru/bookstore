import React, { Component } from "react";
import AuthServise from "../../../servises/authServise";
import { UserName, UserEmail, Password, FormButtons } from "./auth-components";
import { Form, Jumbotron } from "react-bootstrap";

export default class LoginPage extends Component {
  state: any = {
    name: "",
    email: "qw@qw.we",
    password: "",
    submitBtn: "LogIn",
    toggleBtn: "Register",
    pageName: "login"
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

  togglePage = () => {
    this.setState((state: any) => {
      const pageName: string = state.pageName === 'login' ? 'register' : 'login';
      const submitBtn: string = state.toggleBtn;
      const toggleBtn: string = state.submitBtn;
      return {submitBtn, toggleBtn, pageName};
    })
  };

  render() {
    return (
        <Jumbotron className="d-flex align-items-center justify-content-center" style={{maxHeight: '80vh'}}>
          <Form onSubmit={this.login} style={{ minWidth: "25%" }}>
            <div style={{ textAlign: "center", marginBottom: "2rem" }}>
              <h1>book <strong>STORE</strong>
              </h1>
            </div>
            {this.state.pageName === 'register' && <UserName handleName={this.handleChange} />}
            <UserEmail handleEmail={this.handleChange} />
            <Password handlePassword={this.handleChange} placeholder="Password" />
            {this.state.pageName === 'register' && <Password handlePassword={this.handleChange} placeholder="Confirm password" />}
            <FormButtons
              submitBtnText={this.state.submitBtn}
              toggleBtnText={this.state.toggleBtn}
              togglePage={this.togglePage}
            />
          </Form>
        </Jumbotron>
    );
  }
}
