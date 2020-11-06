import React from "react";
import { Container, Row } from "react-bootstrap";
import FilterPanel from "../filter-panel/FilterPanel";
import SortForm from "../sort-form/SortForrm";
import BookList from "../book-card/BookList";

const Main = () => {
  return (        
        <Container>
            <SortForm />
            <Row>
              <FilterPanel />
              <BookList />
            </Row>
        </Container>
  );
};
export default Main;
