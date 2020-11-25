import React from "react";
import { Container, Row } from "react-bootstrap";
import FilterPanel from "../filter-panel/FilterPanel";
import SortForm from "../sort-form/SortForrm";
import BookList from "../book-card/BookList";
import Sidebar from "../../components/sidebar/SideBar";

const Main = () => {
  return (        
        <Container>
            <SortForm />
            <Row>
              <Sidebar isVisible={true} onHide={() => {}}>
              <FilterPanel />
              </Sidebar>
              <BookList />
            </Row>
        </Container>
  );
};
export default Main;
