import { Link } from "react-router-dom";

const MoviePanel = ({ movie }) => {

  return (
    <div className="flex-wrap">
      <div className="movie-panel">
        <div className="mv-image">
          <img
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            alt={movie.title}
            onError={(e) => {e.currentTarget.src = "/nullImage.jpeg"}}
          />
        </div>
        <div className="panel-details">
          <Link to={`/movies/${movie.id}`}><strong>{movie.title}</strong></Link>
          <p>{movie.release_date}</p>
          <p className="summary">
            {movie.overview}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoviePanel;
