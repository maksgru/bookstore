import React, { useEffect } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getBook } from "../../../api/bookApi";
import { bookImageType } from "../../../actions/bookActions";
import DescriptionForm from "./DescriptionForm";
import AddImageForm from "./AddImageForm";
import Comment from "./Comment";
import { getReviews } from "../../../api/reviewApi";
import { RootState } from "../../../reducers";
import BookImagesSlider from './BookImagesSlider';

const BookPage = () => {
  const { book, bookImages, userId } = useSelector((state: RootState) => ({
    book: state.bookPage.book,
    bookImages: state.bookPage.bookImages,
    isAuth: state.auth.isLoggedIn,
    userId: state.auth.id,
  }));
  
  useEffect(() => {
    const bookId = +localStorage.getItem("bookId")!;
      getReviews(bookId);
      getBook(bookId);
  }, [book.bookIcon]);

  const isBookUsers = userId === book.userId;

  const images=[book.bookIcon, ...bookImages.map((img: bookImageType) => img.url)];
  return (
    <Container>
      <Card>
        <Card.Header as="h5">
          {book.writer.name}
          {isBookUsers && <AddImageForm bookId={book.id} />}
        </Card.Header>
        <Container className="mt-2 text-center">
            <BookImagesSlider images={images} />
        </Container>
        <Card.Body>
          <Card.Title>
            {book.name}
            <Button className="float-right mt-4" variant="outline-warning" size="sm">
              <strong className="text-danger">
                {`$ ${(book.price / 100).toFixed(2)}`}
                <i
                  className="fa fa-shopping-cart fa-lg ml-2"
                  aria-hidden="true"
                />
              </strong>
            </Button>
          </Card.Title>
          <DescriptionForm
            description={book.description}
            bookId={book.id}
            isShow={isBookUsers}
          />
          <Comment />
        </Card.Body>
      </Card>
    </Container>
  );
};
export default BookPage;
