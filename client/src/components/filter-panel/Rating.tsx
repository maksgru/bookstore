import React from 'react';
import { Button, Row } from 'react-bootstrap';
const RatingForm = () => {
  const stars = Array.from(Array(5).keys());
  return (
    <div>
      <strong>Rating</strong>
    <Row className="mt-1 ml-1">
    {
      stars.map(item => (
        <div key={item}>
          <Button variant="outline-warning btn-tog btn-bdnone star-rat mb-2" size="sm">
            <i className="fa fa-star-o fa-lg" aria-hidden="true" />
          </Button>
        </div>
      ))
    }
    </Row>
    </div>
  );
};
export default RatingForm;