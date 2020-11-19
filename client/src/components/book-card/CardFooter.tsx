import * as React from "react";
import { Card, OverlayTrigger, Tooltip, Button } from "react-bootstrap";
import { handleFavorites } from "../../api/bookApi";

interface CardFooterProps {
  rating: number;
  id: number;
  isFav: boolean;
}

const CardFooter = ({ rating, id, isFav }: CardFooterProps) => {
  const heart = isFav ? '' : '-o';
  const addFavorites = () => {
    handleFavorites(id, 'add');
  };
  return (
    <Card.Footer className="p-1">
      <div className="mt-2 ml-2 float-left">
        {Array.from(Array(5).keys()).map((item) => {
          const idx = +item < rating ? '' : '-o';
          return (
          <div key={item + "a"} className="text-warning float-left mx-1">
            <i className={`fa fa-star${idx}`} aria-hidden="true" />
          </div>)
          }
        )}
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
        <Button onClick={addFavorites} variant="outline-danger float-right btn-tog btn-bdnone m-0">
          <i className={`fa fa-heart${heart}`} aria-hidden="true" />
        </Button>
      </OverlayTrigger>
    </Card.Footer>
  );
};
export default CardFooter;
