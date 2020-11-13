import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const AddImageForm = () => {
  const [isFormShow, setFormShow] = useState(false);
  const toggleForm = () => {
    setFormShow(true);
  };
  const submitForm = async () => {
    setFormShow(false);
  };
  let handleForm = isFormShow ? submitForm : toggleForm;
  return (
  
        <Form inline className="float-right">
        {isFormShow &&  <Form.Group><Form.File className="h-50" id="custom-file" label="Custom file input" custom /></Form.Group>  }
        <Button
          onClick={handleForm}
          variant="outline-info"
          size="sm"
        >
          <span>
            Upload new image
            <i className="fa fa-picture-o fa-lg ml-2" aria-hidden="true" />
          </span>
        </Button>
        </Form>
      
  );
};
export default AddImageForm;
