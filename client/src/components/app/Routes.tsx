import React from "react";
import { Switch, Route } from "react-router-dom";
import Main from "../main/Main";
import UserPage from "../pages/user/UserPage";
import BookPage from "../pages/book-page/BookPage";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers";

const Routes = () => {
  const { isAuth } = useSelector((state: RootState) => ({
    isAuth: state.auth.isLoggedIn,
  }));
  if (isAuth) {
    return (
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/book" exact component={BookPage} />
        <Route path="/profile" component={UserPage} />
      </Switch>
    );
  } else {
    return (
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/book" exact component={BookPage} />
      </Switch>
    );
  }
};

export default Routes;
