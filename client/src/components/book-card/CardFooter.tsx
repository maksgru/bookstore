import * as React from "react";
import { Card, OverlayTrigger, Tooltip, Button } from "react-bootstrap";

const CardFooter = () => {
  return (
    <Card.Footer className="p-1">
      <div className="mt-2 ml-2 float-left">
        {Array.from(Array(5).keys()).map((item) => (
          <div key={item + "a"} className="text-warning float-left mx-1">
            <i className="fa fa-star" aria-hidden="true" />
          </div>
        ))}
      </div>
      <OverlayTrigger
        overlay={<Tooltip id="tooltip-disabled">Add to cart</Tooltip>}
      >
        <Button variant="outline-info float-right btn-tog btn-bdnone m-0">
          <i className="fa fa-shopping-bag" aria-hidden="true" />
        </Button>
      </OverlayTrigger>
      <OverlayTrigger
        overlay={<Tooltip id="tooltip-disabled">Add to favorites</Tooltip>}
      >
        <Button variant="outline-danger float-right btn-tog btn-bdnone m-0">
          <i className="fa fa-heart-o" aria-hidden="true" />
        </Button>
      </OverlayTrigger>
    </Card.Footer>
  );
};
export default CardFooter;
