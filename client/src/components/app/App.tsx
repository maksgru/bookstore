import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "../navbar/NavBar";
import AuthServise from "../../servises/authServise";
import { connect } from "react-redux";
import { update } from "../../actions";
import Routes from "./Routes";

const authServise = new AuthServise();

function App(props: any) {
  const getUser = async () => {
    let tokens = getTokens();
    let user;
    if (tokens) {
      user = await authServise.getAccess(tokens.accessToken);
      if (user.message === 'Token expired') {
        const data = await authServise.refreshTokens(tokens.refreshToken);
        console.log('refr', data.refreshToken)
        localStorage.clear()
        // this check should be more precise 
        if (data.accessToken) {
          localStorage.setItem('token', data.accessToken);
          localStorage.setItem('refreshToken', data.refreshToken);
          tokens = getTokens();
          user = await authServise.getAccess(data.accessToken);
        }
      }
      if (user.userName) props.update(user);
    }
  }
  useEffect(() => {
    getUser();
  })
  return (
    <Router>
        <NavBar />   
        <Routes isAuth={props.isAuth} />
    </Router>
  );
}


const getTokens = () => {
  const accessToken = localStorage.getItem('token');
  const refreshToken = localStorage.getItem('refreshToken');
  if (accessToken && refreshToken) return { accessToken, refreshToken };
  return null;
  
}

const mdtp = (dispatch: any) => ({
  update: (user: any) => dispatch(update(user))
});

const mstp = (state: any) => ({
  isAuth: state.auth.isLoggedIn
});

export default connect(mstp, mdtp)(App);