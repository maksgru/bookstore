import React, { useEffect } from 'react';
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
    <div className="mb-3">
        <strong>Genres</strong>
        <div>
          {geners.map((item: string) => {
            return (
                <div key={item} className="ml-4 gen-item">
                  {item}
                </div>
            );
          })}
        </div>
      </div>
  );
};
export default Geners;