import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useLoaderData } from "react-router-dom";
import { api_key, url } from "../../Global";
import {
  getWatchLater,
  getFavourites,
  addToList,
  removeFromList,
} from "../../Fetch/FetchUserList";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";

const MovieDetails = () => {
  const movie = useLoaderData();
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

  const date = new Date(movie.release_date);
  const genres = movie.genres.map((genre) => {
    return genre.name;
  });
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
    <div
      className="movie-details"
      style={{
        backgroundImage: `linear-gradient(
          to right,
          rgba(var(--bg-color), 1) 0%,
          rgba(var(--bg-color), 0.3) 100%
        ),url('https://image.tmdb.org/t/p/original/${movie.backdrop_path}')`,
      }}
    >
      <div className="details-container">
        <div className="image">
          <img
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            alt={movie.title}
            onError={(e) => {
              e.currentTarget.src = "/nullImage.jpeg";
            }}
          />
        </div>
        <div className="movie-elements">
          <div>
            <h1>
              {movie.title} ({date.getFullYear()})
            </h1>
            <p>
              {date.getDay()}/{date.getMonth()}/{date.getFullYear()}-
              {genres.join(", ")}
            </p>
          </div>
          <div className="flex">
            <div style={{ minWidth: "40px", maxWidth: "70px" }}>
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
            <div className="save-btns">
              {isWatchlater && (
                <span
                  className="glyphs save-red"
                  onClick={() => handleStore("watchlater")}
                ></span>
              )}
              {!isWatchlater && (
                <span
                  className="glyphs save-white"
                  onClick={() => handleStore("watchlater")}
                ></span>
              )}
              {isFavourite && (
                <span
                  className="glyphs heart-red"
                  onClick={() => handleStore("favourites")}
                ></span>
              )}
              {!isFavourite && (
                <span
                  className="glyphs heart-white"
                  onClick={() => handleStore("favourites")}
                ></span>
              )}
            </div>
          </div>
          <div className="overview">
            <p>
              <i>{movie.tagline}</i>
            </p>
            <div>
              <h2>Overview</h2>
              <p>{movie.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;

export const movieDetailsLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch(
    `${url}/movie/${id}?api_key=${api_key}&language=en-US`
  );

  return res.json();
};
