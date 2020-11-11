import * as React from 'react';
import { Modal } from 'react-bootstrap'
import LoginPage from './loginPage';

function AuthModal(props: any) {
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