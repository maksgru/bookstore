import React from "react";
import { ListGroup, Figure } from 'react-bootstrap';
const BookImages = ({ images }: any) => {
  let i = 1;
  return (
    <ListGroup horizontal className='align-items-center'>
      {
        images.map((image: any) => (
          <ListGroup.Item key={i++} style={{border: 'none'}}>
            <Figure>
                    <Figure.Image
                      width={70}
                      height={100}
                      alt="171x180"
                      src={image}
                    />
                  </Figure>
          </ListGroup.Item>
        ))
      }
  </ListGroup>
  );
};
export default BookImages;
