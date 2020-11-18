import React, { useState } from 'react';
import { Card, Form, Button, Figure } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeUserImg } from '../../../actions/authActions';
import { addUserAvatar } from "../../../api/uploadApi";


const UserCard = () => {
  const [isFormEmpty, setForm] = useState(true);
  const dispatch = useDispatch();
  const { userName, iconUrl } = useSelector((state: any) => ({
    userName: state.auth.name,
    iconUrl: state.auth.userImg
  }));
  const [file, setFile] = useState("");
  const formData = new FormData();
  
  const submitUserImg = async (e: any) => {
    e.preventDefault();
    formData.append("filedata", file);
    const img = await addUserAvatar(formData);
    dispatch(changeUserImg(img));
  };

  const handleChange = (e: any) => {
    const file = e.target.files[0];
    setFile(file);
    if (file) {
      setForm(false)
    } else {
      setForm(true)
    };
  };
  return (
    <Card style={{ maxWidth: "15rem" }}>
          <Card.Header style={{ height: "3.4rem" }}>My profile</Card.Header>
          <Figure className="text-center mt-3">
            <Figure.Image
              width={200}
              height={200}
              alt="171x180"
              src={iconUrl}
              // roundedCircle
            />
          </Figure>
          <Card.Body>
            <Card.Title>{userName}</Card.Title>
            <Form>
              <Form.Group>
                <Form.File
                  onChange={handleChange}
                  id="exampleFormControlFile1"
                  label="Example file input"
                />
                <Button
                  variant="outline-primary"
                  className="mt-2"
                  as="input"
                  onClick={submitUserImg}
                  type="submit"
                  value="Load"
                  size="sm"
                  disabled={isFormEmpty}
                />
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
  );
};
export default UserCard;