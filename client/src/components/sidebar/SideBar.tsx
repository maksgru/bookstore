import { Modal } from "react-bootstrap";
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
        <Modal show={props.isVisible} onHide={props.onHide} >
          <Modal.Header style={{border: 'none'}} closeButton/>
          <Modal.Body>

            {props.children}
          </Modal.Body>
        </Modal>
    );
};
export default Sidebar;
