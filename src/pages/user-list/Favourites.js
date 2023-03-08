import { useSelector } from "react-redux";
import MoviesCard from "../../components/MoviesCard";
import { selectFavourite } from "../../features/WatchSlice";

const Favourites = () => {
  const heart = useSelector(selectFavourite);
  const hasFavs =
    heart.length > 0 ? null : "You don't have any movies favourited";

  return (
    <div className="favourites">
      {hasFavs && <div className="movie-error">{hasFavs}</div>}
      {heart.length > 0 && (
        <div className="grid-view">
          {heart.map((movie) => (
            <MoviesCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favourites;
