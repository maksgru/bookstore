import React from "react";
import { Container, CardGroup } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import UserCard from "./UserCard";
import UserTabs from "./UserTabs";

const UserPage = () => {
  const location = useLocation();
  console.log(location)
  return (
    <Container>
      <CardGroup className="mt-4">
        <UserCard />
        <UserTabs />
      </CardGroup>
    </Container>
  );
};

export default UserPage;
