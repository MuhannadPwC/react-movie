import { Link } from "react-router-dom";

const MoviesList = ({ movies }) => {
  console.log(movies);
  return (
    <div className="movies-list">
      {movies.map((movie) => (
        <Link to={`movies/${movie.id}`} key={movie.id}>
          <div className="movie-card" key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} />
            <h3 className="movie-title">{movie.title}</h3>
            <p className="movie-summary">{movie.overview.slice(0, 75).padEnd(80, ".")}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MoviesList;
