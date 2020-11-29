import React from "react";
import { Col, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setPage } from "../../actions/pageActions";
import { hideSidebar } from "../../actions/sidebarActions";
import { getAllBooks } from "../../api/bookApi";
import Authors from "./Authors";
import Geners from "./Geners";
import Price from "./Price";
import RatingForm from "./Rating";

const FilterPanel = () => {
  const dispatch = useDispatch();

  const handleFilter = () => {
    dispatch(setPage(1));
    dispatch(hideSidebar);
    getAllBooks();
  };

  return (
    <Col style={{maxWidth: '200px'}} className='mb-2'>
      <Geners />
      <RatingForm />
      <Authors />
      <Price />
      <Button onClick={handleFilter} variant="outline-info mt-4" size="sm">
        <span>show books</span>
        <i className="fa fa-filter ml-2" aria-hidden="true" />
      </Button>
    </Col>
  );
};

export default FilterPanel;
