import React, { useEffect } from "react";
import { Row, Col, CardGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import PaginationForm from "./PaginationForm";
import BookCard from "./BookCard";
import { getAll } from "../../api/bookApi";
import Spinner from "../spinner/Spinner";

const BookList = () => {
  const { books, loading } = useSelector((state: any) => ({
    books: state.bookList.books,
    loading: state.bookList.loading,
  }));

  useEffect(() => {
    getAll();
  },[]);
  return (
    <Col>
      <CardGroup>
        {loading ? (
          <Spinner />
        ) : (
          books.map((item: any) => (
            <Col key={item.id}>
              <BookCard book={item} />
            </Col>
          ))
        )}
      </CardGroup>
      <Row className="justify-content-center">
        <PaginationForm />
      </Row>
    </Col>
  );
};

export default BookList;
