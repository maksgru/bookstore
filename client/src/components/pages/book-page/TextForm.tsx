import React, { useState } from "react";
import { Form, Button, Row } from "react-bootstrap";

interface TextFormType {
submitForm: Function;
toggleForm: Function;
initialValue: string;
};

const TextForm = ({ submitForm, toggleForm, initialValue }: TextFormType) => {

  const [grade, setGrade] = useState(0);

  const handleClick = (e: React.FocusEvent<HTMLElement>) => {
    const value = e.target.id;
    setGrade(+value+1);
  };

  const [ formText, setFormText ] = useState(initialValue);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setFormText(value);
  };

  const submit = (submitHandler: Function) => {
    submitHandler(formText, grade);
  };

  const stars = Array.from(Array(5).keys());

  return (
    <div className="mt-4">
        <Form>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Control
            onChange={handleChange}
            as="textarea"
            rows={3}
            value={formText}
          />
        </Form.Group>
        <Row className="mt-1 ml-1 float-left">
        {stars.map((item) => {
          const starType = item >= grade ? '-o' : '';
          return (
            <div key={item + "q"}>
              <Button
                onFocus={handleClick}
                id={item.toString()}
                variant="outline-warning btn-tog btn-bdnone star-rat mb-2"
                size="sm"
              >
                <i className={`fa fa-star${starType} fa-lg`} aria-hidden="true" />
              </Button>
            </div>
          );
        })}
          </Row>
        <Button
          onClick={() => toggleForm(false)}
          variant="outline-danger float-right ml-3"
          size="sm"
          >
          <span>
            Cancel
            <i className="fa fa-ban fa-lg ml-2" aria-hidden="true" />
          </span>
        </Button>
      </Form>
      <Button
        onClick={() => submit(submitForm)}
        variant="outline-info mb-3 float-right"
        size="sm"
        >
        <span>
          Submit
          <i className="fa fa-pencil-square-o fa-lg ml-2" aria-hidden="true" />
        </span>
      </Button>
      </div>
  );
};
export default TextForm;
