import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import FilterPanel from "../filter-panel/FilterPanel";
import SortForm from "../sort-form/SortForrm";
import BookList from "../book-card/BookList";
import Sidebar from "../../components/sidebar/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reducers";
import { hideSidebar } from "../../actions/sidebarActions";
import { useLocation } from "react-router-dom";
import UserCard from '../pages/user/UserCard'
import { rootLocation } from "../../actions/locationActions";
const Main = () => {
  const dispatch = useDispatch();
  const { isSidebarVisible } = useSelector((state: RootState) => ({
    isSidebarVisible: state.sidebar,
  }));

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const location = useLocation();
  if (location.pathname === '/') dispatch(rootLocation);
  useEffect(() => {
    const handleWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWidth);
    return () => window.removeEventListener("resize", handleWidth);
  });

  return (
    <Container>
      <SortForm />
      <Row>
        {screenWidth > 768 ? (
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
