import { Modal, Navbar } from "react-bootstrap";
import React from "react";
import "./sidebar.css";

interface SideBarType {
  isVisible: boolean;
  onHide: VoidFunction;
  children: JSX.Element[] | JSX.Element;
}
/**
 * 
 * @param isVisible boolean
 * @param onHide toggle isVisibility function
 * @param children props.children
 */
const Sidebar = (props: SideBarType) => {
    return (
        <Modal id="sidebar" show={props.isVisible} onHide={props.onHide} >
          <Modal.Header style={{border: 'none'}} closeButton>
          <Navbar.Brand href="/" className="align-middle"><strong className='text-danger'>bookSTORE</strong></Navbar.Brand>
          </Modal.Header>
            {props.children}
        </Modal>
    );
};
export default Sidebar;
