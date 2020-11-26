import React, { useEffect, useState } from "react";
import { Card, OverlayTrigger, Tooltip, Button } from "react-bootstrap";
import { handleFavorites } from "../../api/bookApi";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers";
import { bookType } from "../../actions/bookActions";

interface CardFooterProps {
  rating: number;
  id: number;
}

const CardFooter = ({ rating, id }: CardFooterProps) => {

  const { isAuth, favorites } = useSelector((state: RootState) => ({
    isAuth: state.auth.isLoggedIn,
    favorites: state.favorites
  }));

  const [fav, setFav] = useState(false);
  
  const addFavorites = async () => {
    if (fav) {
      await handleFavorites(id, 'del');
      setFav(false);
    }
    if (!fav) {
      await handleFavorites(id, 'add');
      setFav(true);
    } 
  };

  useEffect(() => {
      const fav = !favorites.every((book: bookType) => book.id !== id);
      setFav(fav);
  },[fav, favorites, id]);

  return (
    <Card.Footer className="p-1">
      <div className="mt-2 ml-2 float-left">
        {Array.from(Array(5).keys()).map((item) => {
          const idx = +item < rating ? '' : '-o';
          return (
          <div key={item + "a"} className="text-warning float-left mx-1">
            <i className={`fa fa-star${idx}`} aria-hidden="true" />
          </div>)
          }
        )}
      </div>
      {/* <OverlayTrigger
        overlay={<Tooltip id="tooltip-disabled">Add to cart</Tooltip>}
      >
        <Button variant="outline-info float-right btn-tog btn-bdnone m-0">
          <i className="fa fa-shopping-bag" aria-hidden="true" />
        </Button>
      </OverlayTrigger> */}
     {isAuth && <OverlayTrigger
        overlay={<Tooltip id="tooltip-disabled">Add to favorites</Tooltip>}
      >
        <Button onClick={addFavorites} variant="outline-danger float-right btn-tog btn-bdnone m-0">
          <i className={`fa fa-heart${fav ? '' : '-o'}`} aria-hidden="true" />
        </Button>
      </OverlayTrigger>}
    </Card.Footer>
  );
};
export default CardFooter;
