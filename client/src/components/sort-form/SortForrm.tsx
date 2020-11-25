import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  Dropdown,
  DropdownButton,
  Row,
} from "react-bootstrap";
import { getAllBooks } from "../../api/bookApi";

const SortForm = () => {
  const [title, setTitle] = useState("Name");
  const [type, setType] = useState("asc");

  const handleSort = async (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const value = e.currentTarget.innerText
    setTitle(value);
    sort(value, type);
  };
  const handleDirection = async () => {
    type === "asc" ? setType("desc") : setType("asc");
    const direction = type === "desc" ? "asc" : "desc";
    sort(title, direction);
  };
  const sort = (title: string, type: string) => {
    const sortTarget = title.toLowerCase();
    const direction = type.toUpperCase();
    getAllBooks({sortTarget, direction});
  };
  return (
    <Row className="justify-content-end mr-3 pb-2">
      <ButtonGroup>
        <Button
          onClick={handleDirection}
          variant="outline-info"
          size="sm"
        >
          <i className={`fa fa-sort-amount-${type}`} aria-hidden="true" />
        </Button>

        <DropdownButton
          variant="outline-info"
          as={ButtonGroup}
          title={title}
          id="bg-nested-dropdown"
          size="sm"
        >
          <Dropdown.Item onClick={handleSort} eventKey="1">
            Name
          </Dropdown.Item>
          <Dropdown.Item onClick={handleSort} eventKey="2">
            Price
          </Dropdown.Item>
          <Dropdown.Item onClick={handleSort} eventKey="2">
            Rating
          </Dropdown.Item>
        </DropdownButton>
      </ButtonGroup>
    </Row>
  );
};

export default SortForm;
