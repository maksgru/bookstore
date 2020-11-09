import React, { useEffect } from "react";
import { Row, Col, CardGroup } from "react-bootstrap";
import PaginationForm from "./PaginationForm";
import BookCard from "./BookCard";
import { connect } from "react-redux";
import BookService from "../../servises/BookServise";
import { booksLoaded } from "../../actions/bookActions";

const bookService = new BookService();

const BookList = (props: any) => {
  const loadBooks = async () => {
    const books = await bookService.getBooks();
    props.loadSuccess(books);
  };
  useEffect(() => {
    loadBooks();
  });
  return (
    <Col>
      <CardGroup>
        {props.books.map((item: any) => (
          <Col key={item.id}>
            <BookCard book={item} />
          </Col>
        ))}
      </CardGroup>

      <Row className="justify-content-center">
        <PaginationForm />
      </Row>
    </Col>
  );
};

const mstp = (state: any) => ({
  books: state.bookList.books
});

const mdtp = (dispatch: any) => ({
  loadSuccess: (books: any) => dispatch(booksLoaded(books))
});

export default connect(mstp, mdtp)(BookList);