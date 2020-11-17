import * as React from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { signOut } from "../../actions/authActions";
import UserIcon from "./UserIcon";
import AuthModal from "../pages/auth/AuthModal";

interface NavBarProps {
  userName: string;
  userIcon: string;
  isLoggedIn: boolean;
  logOut: any;
}
const NavBar = ({ userName, userIcon, isLoggedIn, logOut }: NavBarProps) => {
  const [modalShow, setModalShow] = React.useState(false);
  let modal = true;
  const faType: string = isLoggedIn ? "in" : "out";
  const faText: string = isLoggedIn ? "Out" : "In";
  const authAction = () => {
    return isLoggedIn ? logOut() : setModalShow(true);
  };
  if (isLoggedIn) modal = false;
  return (
    <Navbar expand="md" bg="dark" variant="dark" className="mb-3">
      {modal && <AuthModal show={modalShow} onHide={() => setModalShow(false)} />}
      <Container>
        <Navbar.Brand href="/">bookSTORE</Navbar.Brand>
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

const mstp = (state: any) => ({
  userName: state.auth.name,
  userIcon: state.auth.userImg,
  isLoggedIn: state.auth.isLoggedIn,
});

const mdpt = (dispatch: any) => ({
  logOut: () => dispatch(signOut()),
});

export default connect(mstp, mdpt)(NavBar);
