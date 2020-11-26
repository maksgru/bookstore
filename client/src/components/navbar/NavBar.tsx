import React, { useState } from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../actions/authActions";
import UserIcon from "./UserIcon";
import AuthModal from "../pages/auth/AuthModal";
import { RootState } from "../../reducers";
import { hideSidebar, showSidebar } from "../../actions/sidebarActions";

const NavBar = () => {
  const dispatch = useDispatch();
  const { userName, userIcon, isLoggedIn, sidebarState, viewportWidth } = useSelector((state: RootState) => ({
    userName: state.auth.name,
    userIcon: state.auth.userImg, 
    isLoggedIn: state.auth.isLoggedIn,
    sidebarState: state.sidebar,
    viewportWidth: state.viewport
  }));
  const [modalShow, setModalShow] = useState(false);
  let modal = true;
  const faType: string = isLoggedIn ? "in" : "out";
  const faText: string = isLoggedIn ? "Out" : "In";

  const authAction = () => {
    return isLoggedIn ? dispatch(signOut()) : setModalShow(true);
  };

  const toggleSidebar = () => {
    sidebarState ? dispatch(hideSidebar) : dispatch(showSidebar);
  };

  if (isLoggedIn) modal = false;
  return (
    <Navbar expand="md" bg="dark" variant="dark" className="mb-3">
      {modal && <AuthModal show={modalShow} onHide={() => setModalShow(false)} />}
      <Container>
       <div>
          {viewportWidth <= 768 && <Button variant='dark' onClick={toggleSidebar}>| | |</Button>}
          {viewportWidth > 768 && <Navbar.Brand href="/" className="align-middle">bookSTORE</Navbar.Brand>}
       </div>
        <span className="navbar-text">
          {isLoggedIn && <UserIcon iconUrl={userIcon} userName={userName} />}
          <Button
            onClick={authAction}
            variant="outline-info btn-tog btn-bdnone m-0"
          >
            <i className={`fa fa-sign-${faType} fa-2x`} aria-hidden="true" />
            Sign {faText}
          </Button>
        </span>
      </Container>
    </Navbar>
  );
};


export default NavBar;
