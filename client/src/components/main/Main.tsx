import React from "react";
import { Container, Row } from "react-bootstrap";
import FilterPanel from "../filter-panel/FilterPanel";
import SortForm from "../sort-form/SortForrm";
import BookList from "../book-list/BookList";
import Sidebar from "../../components/sidebar/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reducers";
import { hideSidebar } from "../../actions/sidebarActions";

const Main = () => {
  const dispatch = useDispatch();
  const { isSidebarVisible, viewportWidth } = useSelector((state: RootState) => ({
    isSidebarVisible: state.sidebar,
    viewportWidth: state.viewport
  }));

  return (
    <Container>
      <SortForm />
      <Row>
        {viewportWidth > 768 ? (
          <FilterPanel />
        ) : (
          <Sidebar
            isVisible={isSidebarVisible}
            onHide={() => dispatch(hideSidebar)}
          >
            <FilterPanel />
          </Sidebar>
        )}
        <BookList />
      </Row>
    </Container>
  );
};
export default Main;
