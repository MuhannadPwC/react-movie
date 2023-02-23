import { Link } from "react-router-dom";

const MoviesCard = ({ movie }) => {
  return (
    <div className="movie-card" key={movie.id}>
      <Link to={`movies/${movie.id}`} key={movie.id}>
        <img
          src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
          alt={movie.title}
        />
        <h3 className="movie-title">{movie.title}</h3>
        <p className="movie-summary">
          {movie.overview.slice(0, 75).padEnd(80, ".")}
        </p>
      </Link>
    </div>
  );
};

export default MoviesCard;
