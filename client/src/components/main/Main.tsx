import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BookCard from "../book-card/BookCard";
import FilterPanel from "../filter-panel";
import NavBar from "../navbar/NavBar";
import PaginationForm from "../pagination";
import SortForm from "../sort-form/SortForrm";

const Main = () => {
  return (
    <>
      <NavBar />
      <Container fluid>
        <Row>
          <Col xs={1} style={{minWidth: "250px"}} className="justify-content-center pt-5">
            <FilterPanel />
          </Col>
          <Col xs={10}>
          <SortForm />
            <Row className="justify-content-center">
              {Array.from(Array(20).keys()).map((item) => (
                <Col key={item}>
                  <BookCard />
                </Col>
              ))}
              <PaginationForm  />
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Main;
