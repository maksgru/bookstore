import React from "react";
import { Row, Col, Badge, Container } from "react-bootstrap";
import Nouislider from "nouislider-react";
import { useDispatch, useSelector } from "react-redux";
import { handlePrice } from "../../actions/filterActions";
import { RootState } from "../../reducers";

const Price = () => {
  const dispatch = useDispatch();

  const { price, priceRange } = useSelector((state: RootState) => ({
    price: state.filter.price,
    priceRange: state.price,
  }));

  const [min, max] = priceRange;
  const [minPrice = "", maxPrice = ""] = price.split(",");
  
  const handleSlider = (...args: any) => {
    const [ value ] = args;
    const [ min, max ] = value;
    const minPrice = Math.floor(min);
    const maxPrice = Math.floor(max);
    dispatch(handlePrice(`${minPrice},${maxPrice}`));
  };

  return (
    <Container className="pl-0 ml-2" style={{maxWidth: '200px'}}>
      <strong>Price</strong>
      <Nouislider
        className="my-3 mx-0"
        range={{ min: min, max: max }}
        start={[min, max]}
        onUpdate={handleSlider}
        connect
      />
      <Row>
        <Col>
        <Badge variant="light border border-info py-2 px-3">
          {Math.floor(+minPrice / 100)}
        </Badge>
        </Col>
        <Col>
        <Badge variant="light border border-info py-2 px-3">
          {Math.ceil(+maxPrice / 100)}
        </Badge>
        </Col>
      </Row>
    </Container>
  );
};

export default Price;