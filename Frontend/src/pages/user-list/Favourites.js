import { useEffect, useState } from "react";
import MoviesCard from "../../components/MoviesCard";
import { getFavourites } from "../../Fetch/FetchUserList";
import { useAuthContext } from "../../hooks/useAuthContext";

const Favourites = () => {
  const [favourites, setFavourites] = useState([]);
  const { user } = useAuthContext();

  useEffect(() => {
    const getFav = async () => {
      const list = await getFavourites();

      setFavourites(list);
    };

    if (user) {
      getFav();
    }
  }, [user]);

  const hasFavourites =
    favourites.length !== 0 ? null : "You don't have any movies favourited";

  return (
    <div className="favourites">
      {hasFavourites && <div className="movie-error">{hasFavourites}</div>}
      {favourites.length !== 0 && (
        <div className="grid-view">
          {favourites.favourites.map((movie) => (
            <MoviesCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favourites;
