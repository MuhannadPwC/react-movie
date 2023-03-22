import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MoviesCard from "../../components/MoviesCard";
import { getWatchLater } from "../../Fetch/FetchUserList";
import { useAuthContext } from "../../hooks/useAuthContext";

const WatchLater = () => {
  const [watchlater, setWatchLater] = useState([]);
  const { user } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    const getWatch = async () => {
      const list = await getWatchLater();

      setWatchLater(list);
    };

    if (user) {
      getWatch();
    } else {
      navigate("/login")
    }
  }, [user]);

  const hasWatchLater =
    watchlater.length !== 0
      ? null
      : "You do not have any movies saved to watch later";

  return (
    <div className="watchlater-page">
      {hasWatchLater && <div className="movie-error">{hasWatchLater}</div>}
      {watchlater.length !== 0 && (
        <div className="grid-view">
          {watchlater.map((movie) => (
            <MoviesCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default WatchLater;
