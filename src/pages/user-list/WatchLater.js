import { useSelector } from "react-redux";
import MoviesCard from "../../components/MoviesCard";
import { selectWatchLater } from "../../features/WatchSlice";

const WatchLater = () => {
  const save = useSelector(selectWatchLater);
  const hasSaved =
    save.length > 0
      ? null
      : "you don't have any movies saved to your watch later";

  return (
    <div className="watchlater">
      {hasSaved && <div className="movie-error">{hasSaved}</div>}
      {save.length > 0 && (
        <div className="grid-view">
          {save.map((movie) => (
            <MoviesCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default WatchLater;
