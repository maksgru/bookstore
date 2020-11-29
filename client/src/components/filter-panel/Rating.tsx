import React from "react";
import { Button, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { handleRating } from '../../actions/filterActions';
import { RootState } from "../../reducers";

const RatingForm = () => {
  const dispatch = useDispatch();
  const { rating } = useSelector((state: RootState) => ({
    rating: state.filter.rating
  }))

  const stars = Array.from(Array(5).keys());
  
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const value = +e.currentTarget.id;
    // alert(`value - ${value}, rating - ${rating}`)
    if (value === rating) {
      dispatch(handleRating(null));
      return;
    }
    dispatch(handleRating(value));
  };
  return (
    <div>
      <strong>Rating</strong>
      <Row className="mt-1 ml-1">
        {stars.map((item) => {
          let starType: string;
          if (rating) {
            starType = item+1 <= rating ? '' : '-o';
          } else {
            starType = '';
          }
          return (
            <div key={item + "q"}>
              <Button
                onClick={handleClick}
                id={(1+item).toString()}
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
