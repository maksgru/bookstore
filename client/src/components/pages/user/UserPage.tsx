import React from "react";
import { Container, CardGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { hideSidebar } from "../../../actions/sidebarActions";
import { RootState } from "../../../reducers";
import Sidebar from "../../sidebar/SideBar";
import UserCard from "./UserCard";
import UserTabs from "./UserTabs";

const UserPage = () => {
  const dispatch = useDispatch()
  const { isSidebarVisible, viewportWidth } = useSelector((state: RootState) => ({
    isSidebarVisible: state.sidebar,
    viewportWidth: state.viewport
  }));
  return (
    <Container>
      <CardGroup className="mt-4">
      {viewportWidth > 768 ? (
            <UserCard />
        ) : (
          <Sidebar
            isVisible={isSidebarVisible}
            onHide={() => dispatch(hideSidebar)}
          > 
            <UserCard />
          </Sidebar>
        )}
        <UserTabs />
      </CardGroup>
    </Container>
  );
};

export default UserPage;
