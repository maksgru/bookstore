import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "../navbar/NavBar";
import Routes from "./Routes";
import { useDispatch, useSelector } from "react-redux";
import ErrorNotice from "../error-notice/ErrorNotice";
import { RootState } from "../../reducers";
import { setViewportWidth } from '../../actions/viewportActions';
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleWidth = () => {
      dispatch(setViewportWidth(window.innerWidth));
    };

    window.addEventListener("resize", handleWidth);

    return () => window.removeEventListener("resize", handleWidth);
  }, [dispatch]);

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