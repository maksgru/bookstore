import React from "react";
import { Nav } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getAllBooks } from '../../api/bookApi';
import { RootState } from "../../reducers";

const Geners = () => {
  const { geners } = useSelector((state: RootState) => ({
    geners: state.geners,
  }));
  const handleClick = (e: React.FocusEvent<HTMLAnchorElement>) => {
    const gener = e.target.innerText;
    getAllBooks({gener});
  };

  return (
    <div className="mb-2">
      <strong>Genres</strong>
      <div>
        {geners.map((generName: string) => {
          return (
            <Nav.Link onFocus={handleClick} key={generName} className="ml-1 p-0 gen-item">
              {generName}
            </Nav.Link>
          );
        })}
      </div>
    </div>
  );
};
export default Geners;
