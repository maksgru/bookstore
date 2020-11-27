import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "../navbar/NavBar";
import Routes from "./Routes";
import { useDispatch, useSelector } from "react-redux";
import ErrorNotice from "../error-notice/ErrorNotice";
import { RootState } from "../../reducers";
import { setViewportWidth } from '../../actions/viewportActions';
import { hideSidebar } from "../../actions/sidebarActions";
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleWidth = () => {
      const viewportWidth =window.innerWidth;
      if (viewportWidth <= 768) dispatch(hideSidebar)
      dispatch(setViewportWidth(viewportWidth));
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