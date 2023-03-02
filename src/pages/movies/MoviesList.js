import { Link, useActionData, useLoaderData } from "react-router-dom";
import MoviePanel from "../../components/MoviePanel";
import SearchForm from "../../components/SearchForm";
import { url } from "../../Global";

const MoviesList = () => {
  // const movies = useLoaderData().results;
  // const error =
  //   movies.length === 0 ? "No Movies were found, try searching again" : null;
  const data = useActionData();

  return (
    <>
      <div className="filter-search">
        <SearchForm />
      </div>
      {/* <div className="movies-page">
        {error && <div className="movie-error">{error}</div>}
        {movies && (
          <div className="movie-grid">
            {movies &&
              movies.map((movie) => (
                <MoviePanel movie={movie} key={movie.id} />
              ))}
          </div>
        )}
        {!error && (
          <div className="pagenum-container">
            <div className="prev-btn">
              <button>Prev</button>
            </div>
            <div className="page-number">
              <Link to="/search">1</Link>
            </div>
            <div className="next-btn">
              <button>Next</button>
            </div>
          </div>
        )}
      </div> */}
    </>
  );
};

export default MoviesList;

/* export const moviesListLoader = async ({ request }) => {
  const reqUrl = new URL(request.url);
  const searchTerm = reqUrl.searchParams.get("search");
  if (searchTerm) {
    const response = await fetch(`
    ${url}/search/movie?api_key=0557b758465b10519557edb25fc53d86&language=en-US&query=${searchTerm}`);
    return response.json();
  } else {
    const response = await fetch(`
    ${url}/search/movie?api_key=0557b758465b10519557edb25fc53d86&language=en-US&query=`);
    return response.json();
  }
}; */
