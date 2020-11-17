import React from 'react';
import { Nav } from 'react-bootstrap';
import { useSelector } from 'react-redux';


const Geners = () => {
  const { geners } = useSelector((state: any) => ({
    geners: state.geners
  }));

  return (
    <div className="mb-2">
        <strong>Genres</strong>
        <div>
          {geners.map((item: string) => {
            return (
                <Nav.Link key={item} className="ml-1 p-0 gen-item">
                  {item}
                </Nav.Link>
            );
          })}
        </div>
      </div>
  );
};
export default Geners;