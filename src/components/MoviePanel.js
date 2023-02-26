import { Link } from "react-router-dom";

const MoviePanel = ({ movie }) => {
  return (
    <div className="flex-wrap">
      <div className="movie-panel">
        <div className="image">
          <img
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
        <div className="panel-details">
          <Link to={`/movies/${movie.id}`}>Title: {movie.title}</Link>
          <p>{movie.release_date}</p>
          <p>
            Summary:{" "}
            {movie.overview.length <= 200
              ? movie.overview
              : movie.overview.slice(0, 200).padEnd(205, ".")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoviePanel;
