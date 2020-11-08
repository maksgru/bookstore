import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from "../main/Main";
import UserPage from "../pages/user/UserPage";
import BookPage from "../pages/book-page/BookPage";

const Routes = ({ isAuth }: any) => {
  if (isAuth) {
  return (
    <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/book" exact component={BookPage} />
        <Route path="/profile" component={UserPage} /> 
        </Switch>
  )} else {
    return (
      <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/book" exact component={BookPage} />
          </Switch>
    )
  }
};

export default Routes;