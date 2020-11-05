import React from 'react';
import { Button, Row } from 'react-bootstrap';
const RatingForm = () => {
  const stars = Array.from(Array(5).keys());
  return (
    <div className="mb-1">
      <strong>Rating</strong>
    <Row className="m-auto justify-content-center">
    {
      stars.map(item => (
        <div key={item}>
          <Button variant="outline-warning btn-tog btn-bdnone star-rat" size="sm">
            <i className="fa fa-star-o fa-2x" aria-hidden="true" />
          </Button>
        </div>
      ))
    }
    </Row>
    </div>
  );
};
export default RatingForm;