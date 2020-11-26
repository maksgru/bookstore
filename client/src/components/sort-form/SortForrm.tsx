import React from "react";
import {
  Button,
  ButtonGroup,
  Dropdown,
  DropdownButton,
  Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setSortDirection, setSortTarget } from "../../actions/sortActions";
import { getAllBooks } from "../../api/bookApi";
import { RootState } from "../../reducers";

const SortForm = () => {
  const dispatch = useDispatch();
  const { sortDirection, sortTarget } = useSelector((state: RootState) => ({
    sortDirection: state.sort.direction,
    sortTarget: state.sort.sortTarget
  }));

  const handleSort = async (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const value = e.currentTarget.innerText;
    dispatch(setSortTarget(value.toLowerCase()));
    getAllBooks();
  };
  const handleDirection = async () => {
    sortDirection === "ASC" ? dispatch(setSortDirection('DESC')) : dispatch(setSortDirection("ASC"));
    getAllBooks();
  };

  return (
    <Row className="justify-content-end mr-3 pb-2">
      <ButtonGroup>
        <Button
          onClick={handleDirection}
          variant="outline-info"
          size="sm"
        >
          <i className={`fa fa-sort-amount-${sortDirection.toLowerCase()}`} aria-hidden="true" />
        </Button>

        <DropdownButton
          variant="outline-info"
          as={ButtonGroup}
          title={sortTarget.charAt(0).toUpperCase() + sortTarget.slice(1)}
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
