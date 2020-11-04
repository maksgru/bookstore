import React from "react";
import { Form, InputGroup, Button } from "react-bootstrap";

type UserNameProps = {
  handleName: any;
};

export const UserName = ({ handleName }: UserNameProps) => {
  return (
    <Form.Group>
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text>
            <i className="fa fa-user fa-fw" />
          </InputGroup.Text>
        </InputGroup.Prepend>
        <Form.Control
          name="userName"
          onChange={handleName}
          placeholder="Enter your name"
        />
      </InputGroup>
    </Form.Group>
  );
};

type UserEmailProps = {
  handleEmail: any;
};

export const UserEmail = ({ handleEmail }: UserEmailProps) => {
  return (
    <Form.Group controlId="formBasicEmail">
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text>
            <i className="fa fa-envelope fa-fw" />
          </InputGroup.Text>
        </InputGroup.Prepend>
        <Form.Control
          name="email"
          onChange={handleEmail}
          type="email"
          placeholder="Enter email"
        />
      </InputGroup>
    </Form.Group>
  );
};

type PasswordProps = {
  handlePassword: any;
  placeholder: string;
};

export const Password = ({ handlePassword, placeholder }: PasswordProps) => {
  return (
    <Form.Group controlId="formBasicPassword">
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text>
            <i className="fa fa-lock fa-fw" />
          </InputGroup.Text>
        </InputGroup.Prepend>
        <Form.Control
          name="password"
          onChange={handlePassword}
          type="password"
          placeholder={placeholder}
        />
      </InputGroup>
    </Form.Group>
  );
};

type FormButtonsProps = {
  submitBtnText: string;
  toggleBtnText: string;
  togglePage: any;
};

export const FormButtons = ({
  submitBtnText,
  toggleBtnText,
  togglePage,
}: FormButtonsProps) => {
  return (
    <>
      <Button onClick={togglePage} className="btn-tog float-right" variant="link" size="sm">
        {toggleBtnText}
      </Button>
      <Button variant="primary" type="submit" block>
        {submitBtnText}
      </Button>
    </>
  );
};
