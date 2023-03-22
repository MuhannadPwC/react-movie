import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MoviesCard from "../../components/MoviesCard";
import { getFavourites } from "../../Fetch/FetchUserList";
import { useAuthContext } from "../../hooks/useAuthContext";

const Favourites = () => {
  const [favourites, setFavourites] = useState([]);
  const { user } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    const getFav = async () => {
      const list = await getFavourites();

      setFavourites(list);
    };

    if (user) {
      getFav();
    } else {
      navigate("/login")
    }
  }, [user]);

  const hasFavourites =
    favourites.length !== 0 ? null : "You don't have any movies favourited";

  return (
    <div className="favourites-page">
      {hasFavourites && <div className="movie-error">{hasFavourites}</div>}
      {favourites.length !== 0 && (
        <div className="grid-view">
          {favourites.map((movie) => (
            <MoviesCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favourites;
