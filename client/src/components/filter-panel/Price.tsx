import React from "react";
import { Form } from "react-bootstrap";
import Nouislider from "nouislider-react";
import { useDispatch, useSelector } from "react-redux";
import { handlePrice } from "../../actions/filterActions";

const Price = () => {
  const dispatch = useDispatch();
  const { price } = useSelector((state: any) => ({
    price: state.filter.price,
  }));
  const [minPrice = "", maxPrice = ""] = price.split(",");
  const handleChangeMin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = +e.target.value;
    if (value >= 0) {
      const minValue = value === 0 ? "" : value;
      dispatch(handlePrice(`${minValue},${maxPrice}`));
    }
  };
  const handleChangeMax = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = +e.target.value;
    if (value >= 0) {
      const maxValue = value === 0 ? "" : value;
      dispatch(handlePrice(`${minPrice},${maxValue}`));
    }
  };

  return (
    <Form style={{ maxWidth: "100px" }}>
      <strong>Price</strong>
      <Form.Group controlId="minPrice" className="ml-1 mt-1">
        <Form.Label>Min Price</Form.Label>
        <Form.Control
          onChange={handleChangeMin}
          type="number"
          size="sm"
          placeholder="min"
          value={minPrice}
        />
      </Form.Group>
      <Form.Label>Max Price</Form.Label>
      <Form.Group controlId="maxPrice" className="ml-1">
        <Form.Control
          onChange={handleChangeMax}
          type="number"
          size="sm"
          placeholder="max"
          value={maxPrice}
        />
      </Form.Group>
      <Nouislider className='my-4 ml-0' range={{ min: 0, max: 100 }} start={[20, 80]} connect />
    </Form>
  );
};


export default Price;
