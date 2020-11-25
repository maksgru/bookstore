import React, { useState, useEffect } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { setBookDescription } from "../../../api/bookApi";

interface Dprops {
  bookId: number
  description: string;
  isShow: boolean;
}
const DescriptionForm = ({bookId, description, isShow }: Dprops) => {
  const [isFormShow, setFormShow] = useState(false);
  const [descriptionText, setDescriptionText] = useState('');
  useEffect(() => {
    setDescriptionText(description)
  },[description]);

  const textAreaHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescriptionText(e.target.value);
  };
  const toggleForm = () => {
    setFormShow(true);
  };
  const submitForm = async () => {
    const data = await setBookDescription(bookId, descriptionText);
    setDescriptionText(data);
    setFormShow(false);
  };
  let handleForm = isFormShow ? submitForm : toggleForm;
  return (
    <div className='my-4'>
      {isFormShow ? (
        <Form>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control
              onChange={textAreaHandleChange}
              as="textarea"
              rows={3}
              value={descriptionText}
            />
          </Form.Group>
          <Button
            onClick={() => {
              setFormShow(false);
              setDescriptionText(description);
              return;
            }}
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
      {isShow && (
        <Button onClick={handleForm} variant="outline-info mb-4" size="sm">
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
