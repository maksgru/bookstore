import React from "react";
import { ListGroup, Figure, Nav } from "react-bootstrap";

type bookImagesType = {
  images: string[];
  toggleImage: Function;
}

const BookImages = ({ images, toggleImage }: bookImagesType) => {
  let i = 1;
  return (
    <ListGroup horizontal className="align-items-center">
      {images.map((image: string) => (
        <ListGroup.Item key={"p" + i++} style={{ border: "none" }}>
          <Nav.Link onClick={() => toggleImage(image)}>
            <Figure>
              <Figure.Image style={{maxWidth:'50px', height: 'auto'}} alt="171x180" src={image} />
            </Figure>
          </Nav.Link>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};
export default BookImages;
