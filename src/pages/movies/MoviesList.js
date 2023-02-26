import { useLoaderData } from "react-router-dom";
import MoviePanel from "../../components/MoviePanel";

const MoviesList = () => {

  const movies = useLoaderData().results;
  console.log(movies);

  return (
    <div className="movies-page">
      {movies && (
        <div className="movie-grid">
          {movies.map((movie) => (
            <MoviePanel movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MoviesList;

export const moviesListLoader = async ({ request }) => {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get("search");
  const response = await fetch(`
  https://api.themoviedb.org/3/search/movie?api_key=0557b758465b10519557edb25fc53d86&language=en-US&query=${searchTerm}`);
  return response;
};
