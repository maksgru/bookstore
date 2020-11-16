import React from "react";
import { Container, CardGroup } from "react-bootstrap";
import UserCard from "./UserCard";
import UserTabs from "./UserTabs";

const UserPage = () => {
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
