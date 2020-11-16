import React, { useEffect } from 'react';
import { Nav } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { genersLoaded } from '../../actions/generActions';
import { getGeners } from '../../api/bookApi';

const Geners = () => {
  const dispatch = useDispatch();
  const { geners } = useSelector((state: any) => ({
    geners: state.geners
  }));
  useEffect(() => {
    const getData = async () => {
      const data = await getGeners();
      dispatch(genersLoaded(data));
    };
    getData()
  }, [dispatch]);
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