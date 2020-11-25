import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "../navbar/NavBar";
import Routes from "./Routes";
import { useSelector } from "react-redux";
import ErrorNotice from "../error-notice/ErrorNotice";
import { RootState } from "../../reducers";

const App = () => {
  const { error } = useSelector((state: RootState) => ({
    error: state.error
  }));
  return (
    <Router>
      <NavBar />
      { error ? <ErrorNotice /> : <Routes /> }
    </Router>
  );
};


export default App;
