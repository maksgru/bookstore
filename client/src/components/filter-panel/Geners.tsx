import React from "react";
import { Nav } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getAll } from '../../api/bookApi';

const Geners = () => {
  const { geners } = useSelector((state: any) => ({
    geners: state.geners,
  }));
  const handleClick = (e: React.FocusEvent<HTMLAnchorElement>) => {
    const gener = e.target.innerText;
    getAll({gener});
  };

  return (
    <div className="mb-2">
      <strong>Genres</strong>
      <div>
        {geners.map((item: string) => {
          return (
            <Nav.Link onFocus={handleClick} key={item} className="ml-1 p-0 gen-item">
              {item}
            </Nav.Link>
          );
        })}
      </div>
    </div>
  );
};
export default Geners;
