import React from "react";
import { Button, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { handleRating } from '../../actions/filterActions';
const RatingForm = () => {
  const dispatch = useDispatch();
  const { rating } = useSelector((state: any) => ({
    rating: state.filter.rating
  }))
  const stars = Array.from(Array(5).keys());
  const handleClick = (e: React.FocusEvent<HTMLElement>) => {
    const value = e.target.id;
    dispatch(handleRating(+value+1));
  };
  return (
    <div>
      <strong>Rating</strong>
      <Row className="mt-1 ml-1">
        {stars.map((item) => {
          const starType = item >= rating ? '-o' : '';
          return (
            <div key={item + "q"}>
              <Button
                onFocus={handleClick}
                id={item.toString()}
                variant="outline-warning btn-tog btn-bdnone star-rat mb-2"
                size="sm"
              >
                <i className={`fa fa-star${starType} fa-lg`} aria-hidden="true" />
              </Button>
            </div>
          );
        })}
      </Row>
    </div>
  );
};
export default RatingForm;
