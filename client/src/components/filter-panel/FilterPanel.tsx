import React, { useEffect } from "react";
import { Col, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { authorsLoaded } from "../../actions/authorActions";
import { genersLoaded } from "../../actions/generActions";
import { setPage } from "../../actions/pageActions";
import { priceLoaded } from "../../actions/priceActions";
import { hideSidebar } from "../../actions/sidebarActions";
import { getAllBooks, getData } from "../../api/bookApi";
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
