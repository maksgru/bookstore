import React, { Component } from "react";
import { UserName, UserEmail, Password, FormButtons } from "./auth-components";
import { Form, Jumbotron, Alert } from "react-bootstrap";
import { connect } from "react-redux";
import { signIn, signOut } from "../../../actions/authActions";
import { login, register } from "../../../api/authApi";

interface Lprops {
  signIn: any;
  signOut: any;
}

interface Lstate {
  userName: string;
  email: string;
  password: string;
  confirmedPassword: string;
  submitBtn: string;
  toggleBtn: string;
  pageName: string;
  error: boolean;
  isPasswordsMatch: boolean;
}

class LoginPage extends Component<Lprops, Lstate> {
  constructor(props: Lprops) {
    super(props);
    this.state = {
      userName: "",
      email: "",
      password: "",
      confirmedPassword: '',
      submitBtn: "LogIn",
      toggleBtn: "Register",
      pageName: "login",
      error: false,
      isPasswordsMatch: false,
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const key = e.target.name;
    this.setState({ [key]: value } as any);
  };

  auth = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let user: any;
    if (this.state.pageName === "login") {
      user = {
        email: this.state.email,
        password: this.state.password,
      };
      try {
        const data = await login(user);
        this.setState({ userName: "", email: "", password: "" });
        this.props.signIn(data);
        return;
      } catch (err) {
        this.setState({ error: true });
      }
      this.props.signOut();
    }
    if (this.state.pageName === "register") {
      user = {
        name: this.state.userName,
        email: this.state.email,
        password: this.state.password,
      };
      try {
        const data = await register(user);
        this.setState({ userName: "", email: "", password: "" });
        this.props.signIn(data);
        return;
      } catch (err) {
        this.setState({ error: true });
      }
      this.props.signOut();
    }
  };

  handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    this.setState({password: value});
    if (this.state.confirmedPassword !== value) {
      this.setState({isPasswordsMatch: true})
    } else {
      this.setState({isPasswordsMatch: false})
    }
  };
  handlePasswordConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    this.setState({confirmedPassword: value});
    if (this.state.password !== value) {
      this.setState({isPasswordsMatch: true})
    } else {
      this.setState({isPasswordsMatch: false})
    }
  };

  togglePage = () => {
    this.setState((state: Lstate) => {
      const pageName = state.pageName === "login" ? "register" : "login";
      const submitBtn = state.toggleBtn;
      const toggleBtn = state.submitBtn;
      return { submitBtn, toggleBtn, pageName };
    });
  };

  render() {
    return (
      <Jumbotron
        className="d-flex align-items-center justify-content-center"
        style={{ maxHeight: "80vh" }}
      >
        <Form onSubmit={this.auth} style={{ minWidth: "25%" }}>
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <h1>
              book <strong>STORE</strong>
            </h1>
          </div>
          {this.state.pageName === "register" && (
            <UserName handleName={this.handleChange} />
          )}
          <UserEmail handleEmail={this.handleChange} />
          <Password handlePassword={this.handlePassword} placeholder="Password" />
          {(this.state.isPasswordsMatch && this.state.pageName === 'register') && (
            <Form.Text className="text-danger">
              Passwords do not match!
            </Form.Text>
          )}
          {this.state.pageName === "register" && (
            <Password
              handlePassword={this.handlePasswordConfirm}
              placeholder="Confirm password"
            />
          )}
          <FormButtons
            submitBtnText={this.state.submitBtn}
            toggleBtnText={this.state.toggleBtn}
            togglePage={this.togglePage}
          />
          {this.state.error && (
            <Alert variant="danger mt-5">
              {`Incorrect ${this.state.pageName} data! Please try again...`}
            </Alert>
          )}
        </Form>
      </Jumbotron>
    );
  }
}

const mdtp = (dispatch: any) => ({
  signIn: (user: any) => dispatch(signIn(user)),
  signOut: () => dispatch(signOut()),
});

export default connect(null, mdtp)(LoginPage);
