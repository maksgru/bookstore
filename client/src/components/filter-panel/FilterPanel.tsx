import React, { useEffect } from "react";
import { Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { authorsLoaded } from "../../actions/authorActions";
import { genersLoaded } from "../../actions/generActions";
import { priceLoaded } from "../../actions/priceActions";
import { getAllBooks, getData } from "../../api/bookApi";
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
    getAllBooks(filter);
  };

  useEffect(() => {
    const loadData = async () => {
      const data = await getData({authors: true, geners: true, price: true});
      dispatch(authorsLoaded(data.authors));
      dispatch(genersLoaded(data.geners));
      dispatch(priceLoaded(data.priceRange));
    };
    loadData()
  }, [dispatch]);

  return (
    <Col style={{maxWidth: '200px'}}>
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
