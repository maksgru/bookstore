import React from "react";
import { Container, Row, Col, CardGroup } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import BookCard from "../book-card/BookCard";
import FilterPanel from "../filter-panel";
import NavBar from "../navbar/NavBar";
import PaginationForm from "../pagination";
import SortForm from "../sort-form/SortForrm";

const Main = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Row className="justify-content-end mr-1">
          {/* <Col xs={2} style={{minWidth: "250px"}} className="justify-content-center pt-5"> */}
          <SortForm />
          {/* </Col> */}
          </Row>
          <Row>
            <Col md={4} xs={6} lg={3}>
            <Router>
            <FilterPanel />
            </Router>
            </Col>
          <Col>
            <CardGroup>
                {Array.from(Array(20).keys()).map((item) => (
                  <Col key={item}>
                    <BookCard />
                  </Col>
                ))}
                <PaginationForm  />
            </CardGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Main;
