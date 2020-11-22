import React from "react";
import { Col, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getAll } from "../../api/bookApi";
import { RootState } from "../../reducers";
import Authors from "./Authors";
import Geners from "./Geners";
import Price from "./Price";
import RatingForm from "./Rating";

const FilterPanel = () => {
  const { filter } = useSelector((state: RootState) => ({
    filter: state.filter
  }))
  const handleFilter = () => {
    getAll(filter);
  };
  return (
    <Col md={4} xs={6} lg={3}>
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
