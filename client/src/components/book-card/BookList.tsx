import React, { useEffect } from "react";
import { Row, Col, CardGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import PaginationForm from "./PaginationForm";
import BookCard from "./BookCard";
import { getAll } from "../../api/bookApi";
import { booksLoaded } from "../../actions/bookActions";
import Spinner from "../spinner/Spinner";

const BookList = () => {
  const dispatch = useDispatch();
  const { books, loading } = useSelector((state: any) => ({
    books: state.bookList.books,
    loading: state.bookList.loading,
  }));

  useEffect(() => {
    const getData = async () => {
      const data = await getAll();
      dispatch(booksLoaded(data));
    };
    getData();
  }, [dispatch]);
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
