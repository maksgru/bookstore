import React, { useEffect } from "react";
import { Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { authorsLoaded } from "../../actions/authorActions";
import { genersLoaded } from "../../actions/generActions";
import { priceLoaded } from "../../actions/priceActions";
import { getAll, getData } from "../../api/bookApi";
import { RootState } from "../../reducers";
import Authors from "./Authors";
import Geners from "./Geners";
import Price from "./Price";
import RatingForm from "./Rating";

const FilterPanel = () => {
  const dispatch = useDispatch();
  const { filter } = useSelector((state: RootState) => ({
    filter: state.filter
  }))
  const handleFilter = () => {
    getAll(filter);
  };

  useEffect(() => {
    const loadData = async () => {
      const data = await getData({authors: true, geners: true, price: true});
      if (data.authors) dispatch(authorsLoaded(data.authors));
      if (data.geners) dispatch(genersLoaded(data.geners));
      if (data.priceRange) dispatch(priceLoaded(data.priceRange));
    };
    loadData()
  }, [dispatch]);

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
