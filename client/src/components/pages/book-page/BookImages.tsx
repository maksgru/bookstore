import React from "react";
import { ListGroup, Figure, Nav } from 'react-bootstrap';
const BookImages = ({ images, toggleImage }: any) => {
  let i = 1;
  return (
    <ListGroup horizontal className='align-items-center'>
      {
        images.map((image: any) => (
          <ListGroup.Item key={'p' + i++} style={{border: 'none'}}>
            <Nav.Link onClick={() => toggleImage(image)}>
              <Figure>
                      <Figure.Image
                        width={70}
                        height={100}
                        alt="171x180"
                        src={image}
                      />
                    </Figure>
            </Nav.Link>
          </ListGroup.Item>
        ))
      }
  </ListGroup>
  );
};
export default BookImages;
