import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  Dropdown,
  DropdownButton,
  Row,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { booksLoaded, bookType } from "../../actions/bookActions";
import { getAll } from "../../api/bookApi";

const SortForm = () => {
  const [title, setTitle] = useState("Name");
  const [type, setType] = useState("asc");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSort = async (e: any) => {
    const value = e.target.innerText;
    setTitle(value);
    sort(value, type);
  };
  const handleDirection = async () => {
    type === "asc" ? setType("desc") : setType("asc");
    const direction = type === "desc" ? "asc" : "desc";
    sort(title, direction);
  };
  const sort = async (title: string, type: string) => {
    setLoading(true);
    const sortTarget = title.toLowerCase();
    const direction = type.toUpperCase();
    const books: bookType[] = await getAll(sortTarget, direction);
    dispatch(booksLoaded(books));
    setLoading(false);
  };
  return (
    <Row className="justify-content-end mr-1">
      <ButtonGroup>
        <Button
          onClick={handleDirection}
          variant="outline-info"
          size="sm"
          disabled={loading}
        >
          <i className={`fa fa-sort-amount-${type}`} aria-hidden="true" />
        </Button>

        <DropdownButton
          disabled={loading}
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
