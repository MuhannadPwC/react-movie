import { useEffect, useState } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";
import {
  getWatchLater,
  addToList,
  removeFromList,
  getFavourites,
} from "../Fetch/FetchUserList";
import { useAuthContext } from "../hooks/useAuthContext";

const MoviesCard = ({ movie }) => {
  const [watchlater, setWatchLater] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const { user } = useAuthContext();

  useEffect(() => {
    const getWatch = async () => {
      const list = await getWatchLater();

      setWatchLater(list);
    };
    const getFav = async () => {
      const list = await getFavourites();

      setFavourites(list);
    };

    if (user) {
      getWatch();
      getFav();
    }
  }, [user]);
  const percentage = Math.round(movie.vote_average * 10);
  let color = "#008631";
  if (percentage <= 25) {
    color = "#ff0000";
  }
  if (percentage > 25 && percentage < 50) {
    color = "#FF7518";
  }
  if (percentage >= 50 && percentage < 75) {
    color = "#FDDA0D";
  }
  if (percentage >= 75 && percentage < 90) {
    color = "#00c04b";
  }
  let isWatchlater = false;
  let isFavourite = false;
  if (watchlater.length !== 0) {
    isWatchlater = watchlater.watchlater.some((mv) => mv.id === movie.id);
  }
  if (favourites.length !== 0) {
    isFavourite = favourites.favourites.some((mv) => mv.id === movie.id);
  }

  const handleStore = async (key) => {
    if (await addToList(key, movie)) {
      return;
    } else {
      await removeFromList(key, movie);
    }
  };

  return (
    <div className="movie-card" key={movie.id}>
      <div className="image">
        <img
          src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
          alt={movie.title}
          onError={(e) => {
            e.currentTarget.src = "/nullImage.jpeg";
          }}
        />
        <div className="options">
          <div className="glyphs dots"></div>
          <div className="dropped-options">
            <div className="group">
              {isWatchlater && <span className="glyphs save-red"></span>}
              {!isWatchlater && <span className="glyphs save"></span>}
              <button
                className="watch-btn"
                onClick={() => handleStore("watchlater")}
              >
                Watch Later
              </button>
            </div>
            <hr />
            <div className="group">
              {isFavourite && <span className="glyphs heart-red"></span>}
              {!isFavourite && <span className="glyphs heart"></span>}
              <button
                className="fav-btn"
                onClick={() => handleStore("favourites")}
              >
                Favorite
              </button>
            </div>
          </div>
        </div>
        <div className="progress-bar">
          <CircularProgressbar
            value={percentage}
            text={percentage.toString() + "%"}
            background={true}
            styles={buildStyles({
              // text size
              textSize: "30px",

              // colors
              pathColor: color,
              textColor: color,
              backgroundColor: "#000000",
            })}
          />
        </div>
      </div>
      <Link to={`/movies/${movie.id}`}>
        <h3 className="movie-title">{movie.title}</h3>
      </Link>
      <p className="movie-summary">
        {movie.overview.slice(0, 40).padEnd(45, ".")}
      </p>
    </div>
  );
};

export default MoviesCard;
