import React from "react";
import "./App.css";
import AuthModal from "../pages/auth/AuthModal";
import Main from "../main/Main";
import UserPage from "../pages/user/UserPage";
import BookPage from "../pages/book-page/BookPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "../navbar/NavBar";
import { Button } from 'react-bootstrap';
function App() {

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Router>
      <NavBar />
      <Button variant="primary" onClick={() => setModalShow(true)}>
         Launch vertically centered modal
       </Button>

       <AuthModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <Route path="/" exact component={Main} />
      <Route path="/book" component={BookPage} />
      <Route path="/profile" component={UserPage} />
      {/* {<LognPage />} */}
    </Router>
  );
}

export default App;
