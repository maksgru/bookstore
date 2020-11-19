import React, { useEffect } from "react";
import { Button, Image, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { bookType } from '../../../../actions/bookActions';
import { getFavorites, handleFavorites } from "../../../../api/bookApi";
import { favoritesLoaded } from "../../../../actions/favoritesActions";

const FavoreteBooksTab = () => {
  const dispatch = useDispatch();
  const { books } = useSelector((state: any) => ({
    books: state.favorites,
  }));

  const loadBookPage = (id: number) => {
    localStorage.setItem('bookId', id.toString())
  };

  const delFavorites = async (id: number) => {
    const books: any = await handleFavorites(id, 'del');
    dispatch(favoritesLoaded(books))
  };

  useEffect(() => {
    getFavorites();
  },[]);

  return (
    <ListGroup>
      {books.map((book: bookType) => {
        return (
          <ListGroup.Item key={book.id}>
           <Link 
            to='/book' 
            onClick={() => loadBookPage(book.id)}
            style={{ textDecoration: "none" }}>
              <Image
                style={{ maxHeight: "30px", width: "auto" }}
                src={book.bookIcon}
                rounded
              />
              <span className="ml-2">{book.name}</span>
           </Link>
            <Button onClick={() => delFavorites(book.id)} variant='outline-danger float-right ' size="sm">
            <i className={`fa fa-trash-o fa-lg`} aria-hidden="true" />
            </Button>
            <span className="mx-4 float-right">
              {Array.from(Array(5).keys()).map((item) => {
                const idx = +item < book.rating ? "" : "-o";
                return (
                    <i key={item + 'y'} className={`fa fa-star${idx} text-warning`} aria-hidden="true" />
                );
              })}
            </span>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};
export default FavoreteBooksTab;
