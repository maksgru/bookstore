import React, { useState, useEffect } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { setBookDescription } from "../../../api/bookApi";
interface Dprops {
  bookId: number
  description: string;
}
const DescriptionForm = ({bookId, description }: Dprops) => {
  const [isFormShow, setFormShow] = useState(false);
  const [descriptionText, setDescriptionText] = useState('');
  useEffect(() => {
    setDescriptionText(description)
  },[description]);
  const { isAuth } = useSelector((state: any) => ({
    isAuth: state.auth.isLoggedIn,
  }));
  const textAreaHandleChange = (e: any) => {
    setDescriptionText(e.target.value);
  };
  const toggleForm = () => {
    setFormShow(true);
  };
  const submitForm = async () => {
    const data = await setBookDescription(bookId, descriptionText);
    console.log(data)
    setDescriptionText(data);
    setFormShow(false);
  };
  let handleForm = isFormShow ? submitForm : toggleForm;
  return (
    <div>
      {isFormShow ? (
        <Form>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control
              onChange={textAreaHandleChange}
              as="textarea"
              rows={3}
            />
          </Form.Group>
          <Button
            onClick={() => setFormShow(false)}
            variant="outline-danger"
            size="sm"
            className="float-right"
          >
            <span>
              Cancel
              <i className="fa fa-ban fa-lg ml-2" aria-hidden="true" />
            </span>
          </Button>
        </Form>
      ) : (
        <Card.Text>{descriptionText}</Card.Text>
      )}
      {isAuth && (
        <Button onClick={handleForm} variant="outline-info" size="sm">
          <span>
            Edit description
            <i
              className="fa fa-pencil-square-o fa-lg ml-2"
              aria-hidden="true"
            />
          </span>
        </Button>
      )}
    </div>
  );
};

export default DescriptionForm;