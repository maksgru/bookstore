import React from 'react';
import { Modal } from 'react-bootstrap'
import LoginPage from './loginPage';

type AuthModalType = {
  show: boolean;
  onHide: VoidFunction;
}

function AuthModal(props: AuthModalType) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
      </Modal.Header>
        <LoginPage />
    </Modal>
  );
}

export default AuthModal;