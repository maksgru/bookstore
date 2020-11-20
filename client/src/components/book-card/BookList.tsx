import React, { useEffect } from "react";
import { Row, Col, CardGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import PaginationForm from "./PaginationForm";
import BookCard from "./BookCard";
import { getAll } from "../../api/bookApi";
import Spinner from "../spinner/Spinner";
import { getFavorites } from "../../api/bookApi";

const BookList = () => {
  const { books, loading, isAuth } = useSelector((state: any) => ({
    books: state.bookList.books,
    loading: state.bookList.loading,
    isAuth: state.auth.isLoggedIn
  }));

  useEffect(() => {
    getAll();
    if (isAuth) getFavorites();
  },[isAuth]);
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
