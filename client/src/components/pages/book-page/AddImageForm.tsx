import React, { useState } from "react";
import { Button, DropdownButton, Dropdown } from "react-bootstrap";

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
    <DropdownButton
      className="float-right"
      menuAlign="right"
      title={
        <span>
          Upload new image
          <i className="fa fa-picture-o fa-lg ml-2" aria-hidden="true" />
        </span>
      }
      id="dropdown-menu-align-right"
      variant="outline-info"
      size="sm"
    >
      <Dropdown.ItemText>

      <div className="input-group m-1 border border-info rounded" style={{ minWidth: "400px" }}>
        <div className="custom-file">
          <input
            type="file"
            className="custom-file-input"
            id="inputGroupFile04"
            aria-describedby="inputGroupFileAddon04"
          />
          <label className="custom-file-label" htmlFor="inputGroupFile04">
            Choose file
          </label>
        </div>
        <div className="input-group-append">
          <Button
            className="float-right"
            onClick={handleForm}
            variant="outline-info"
            size="sm"
            >
            Upload
          </Button>
        </div>
      </div>
            </Dropdown.ItemText>
    </DropdownButton>
  );
};
export default AddImageForm;
