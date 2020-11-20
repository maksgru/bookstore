import React, { Component } from "react";
import { UserName, UserEmail, Password, FormButtons } from "./auth-components";
import { Form, Jumbotron } from "react-bootstrap";
import { connect } from "react-redux";
import { signIn, signOut } from "../../../actions/authActions";
import { login } from '../../../api/authServise'

interface Lprops {
signIn: any;
signOut: any;
};

interface Lstate {
      userName: string;
      email: string;
      password: string;
      submitBtn: string;
      toggleBtn: string;
      pageName: string;
};

class LoginPage extends Component<Lprops, Lstate> {
  constructor(props: Lprops) {
    super(props)
    this.state = {
      userName: "",
      email: "",
      password: "",
      submitBtn: "LogIn",
      toggleBtn: "Register",
      pageName: "login"
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
    if (this.state.pageName === 'login') {
      user = {
        email: this.state.email,
        password: this.state.password
      };
      const data = await login(user);
      this.setState({userName: '', email: '', password: ''});
      if (data) {
        this.props.signIn(data);
        return;
      }
      this.props.signOut();
    }
    if (this.state.pageName === 'register') {
      user = {
        name: this.state.userName,
        email: this.state.email,
        password: this.state.password
      }
      // const status = await this.authService.register(user);
      // if (status) {
      //   user = {
      //     email: this.state.email,
      //     password: this.state.password
      //   };
      //   this.setState({userName: '', email: '', password: ''});
      //   const data = await login(user);
      //   if (data) {
      //     this.props.signIn(data);
      //     return;
      //   }
      //   this.props.signOut();
      // }
    }
  };

  togglePage = () => {
    this.setState((state: Lstate) => {
      const pageName = state.pageName === 'login' ? 'register' : 'login';
      const submitBtn = state.toggleBtn;
      const toggleBtn = state.submitBtn;
      return {submitBtn, toggleBtn, pageName};
    })
  };

  render() {
    return (
        <Jumbotron className="d-flex align-items-center justify-content-center" style={{maxHeight: '80vh'}}>
          <Form onSubmit={this.auth} style={{ minWidth: "25%" }}>
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

const mdtp = (dispatch: any) => ({
  signIn: (user: any) => dispatch(signIn(user)),
  signOut: () => dispatch(signOut())
});

export default connect(null, mdtp)(LoginPage);