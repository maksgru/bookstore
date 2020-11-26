import React, { useEffect } from "react";
import { Row, Col, CardGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import PaginationForm from "./PaginationForm";
import BookCard from "./BookCard";
import { getAllBooks } from "../../api/bookApi";
import Spinner from "../spinner/Spinner";
import { getFavorites } from "../../api/bookApi";
import { RootState } from "../../reducers";
import { bookType } from "../../actions/bookActions";

const BookList = () => {
  const { books, loading, isAuth } = useSelector((state: RootState) => ({
    books: state.bookList.books,
    loading: state.bookList.loading,
    isAuth: state.auth.isLoggedIn
  }));

  useEffect(() => {
    getAllBooks();
    if (isAuth) getFavorites();
  },[isAuth]);
  return (
    <Col>
      <CardGroup>
        {loading ? (
          <Spinner />
        ) : (
          books.map((item: bookType) => (
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
