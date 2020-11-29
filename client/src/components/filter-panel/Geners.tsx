import React, { useEffect } from "react";
import { Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { handleGener } from "../../actions/filterActions";
import { genersLoaded } from "../../actions/generActions";
import { setPage } from "../../actions/pageActions";
import { getAllBooks, getData } from '../../api/bookApi';
import { RootState } from "../../reducers";

const Geners = () => {
  const dispatch = useDispatch()
  const { geners, currentGener } = useSelector((state: RootState) => ({
    geners: state.geners,
    currentGener: state.filter.gener
  }));
  const handleClick = (e: React.FocusEvent<HTMLAnchorElement>) => {
    const gener = e.target.innerText;
    dispatch(setPage(1));
    dispatch(handleGener(gener));
    getAllBooks();
  };
  useEffect(() => {
    const loadGeners = async () => {
      const data = await getData({geners: true});
      dispatch(genersLoaded(data.geners));
    };
    loadGeners()
  }, [dispatch]);

  return (
    <div className="mb-2">
      <strong>Genres</strong>
      <div>
        {geners.map((generName: string) => {
          const selected = generName === currentGener ? `text-info selected` : '';
          return (
            <Nav.Link onFocus={handleClick} key={generName} className={`ml-1 p-0 gen-item ${selected}`}>
              {generName}
            </Nav.Link>
          );
        })}
      </div>
    </div>
  );
};
export default Geners;
