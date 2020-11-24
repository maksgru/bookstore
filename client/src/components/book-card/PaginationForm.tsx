import React, { useState } from "react";
import { Pagination } from "react-bootstrap";
import { getAll } from "../../api/bookApi";

const PaginationForm = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const handleFocus = (e: React.FocusEvent<HTMLElement>) => {
    const page = +e.target.innerText;
    getAll({ page });
    setCurrentPage(page)
  };
  return (
    <Pagination size="sm">
      <Pagination.Prev />
      {Array.from(Array(5).keys()).map((item: number) => (
        <Pagination.Item
          key={item + "t"}
          active={item+1 === currentPage}
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
