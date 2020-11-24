import React, { useState } from "react";
import { Button, DropdownButton, Dropdown } from "react-bootstrap";
import { addBookImage } from '../../../api/uploadApi';

const AddImageForm = ({ bookId }: {bookId: number}) => {

  const formData = new FormData();

  const [ file, setFile ] = useState<string | Blob>('');
  const [ label, setLabel ] = useState('Choose file...');
  const fileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files![0];
    setFile(file);
    setLabel(file.name);
  };
  const submitForm = async () => {
    if (file) {
      formData.append("bookImage", file);
      formData.append('bookId', bookId.toString())
      addBookImage(formData);
      setFile('');
    }
  };
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
        <div
          className="input-group m-1 border border-info rounded"
          style={{ minWidth: "400px" }}
        >
          <div className="custom-file">
            <input
              type="file"
              onChange={fileChange}
              className="custom-file-input"
              id="inputGroupFile04"
              aria-describedby="inputGroupFileAddon04"
            />
            <label className="custom-file-label" htmlFor="inputGroupFile04">
              {label}
            </label>
          </div>
          <div className="input-group-append">
            <Button
              className="float-right"
              onClick={submitForm}
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
