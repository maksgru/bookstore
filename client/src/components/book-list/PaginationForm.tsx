import React from "react";
import { Pagination } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../actions/pageActions";
import { getAllBooks } from "../../api/bookApi";
import { RootState } from "../../reducers";

const PaginationForm = () => {
  const dispatch = useDispatch();
  const { page } = useSelector((state: RootState) => ({
    page: state.page
  }));
  const handleFocus = (e: React.FocusEvent<HTMLElement>) => {
    const pageNumber = +e.target.innerText;
    dispatch(setPage(+pageNumber));
    getAllBooks();
  };
  return (
    <Pagination size="sm">
      <Pagination.Prev />
      {Array.from(Array(5).keys()).map((item: number) => (
        <Pagination.Item
          key={item + "t"}
          active={item+1 === page}
          onFocus={handleFocus}
        >
          {item + 1}
        </Pagination.Item>
      ))}
      <Pagination.Next />
    </Pagination>
  );
};
export default PaginationForm;
