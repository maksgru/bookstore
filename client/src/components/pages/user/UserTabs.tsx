import React, { useState } from 'react';
import { Card, Nav } from 'react-bootstrap';
import AddBookTab from "./profile-tabs/AddBookTab";
import CartTab from './profile-tabs/CartTab';
import FavoreteBooksTab from './profile-tabs/FavoriteBooksTab';

const UserTabs  = () => {
  const [link, setLink] = useState('Add book');
  const handleTab = (e: any) => {
    const currentLink = e.target.innerText
    setLink(currentLink);
  };
  return (
    <Card>
    <Card.Header>
      <Nav variant="tabs">
        <Nav.Item>
          <Nav.Link onClick={handleTab}>Add book</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={handleTab}>Favorite books</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={handleTab}>Cart</Nav.Link>
        </Nav.Item>
      </Nav>
    </Card.Header>
    <Card.Body>
      <Card.Title>Add Book</Card.Title>
      {link === 'Add book' && <AddBookTab />}
      {link === 'Favorite books' && <FavoreteBooksTab />}
      {link === 'Cart' && <CartTab />}
    </Card.Body>
  </Card>
  );
};
export default UserTabs;