import MoviesCard from "../components/MoviesCard";
import SearchForm from "../components/SearchForm";
import FetchPopular from "../Fetch/FetchPopular";
import { api_key, url } from "../Global";

const Home = () => {
  const {
    data: popular,
    isLoading,
    error,
  } = FetchPopular(`${url}/movie/popular?api_key=${api_key}&language=en-US`);

  return (
    <div className="homepage">
      <div className="flex-container">
        <div className="title">
          <div>
            <h1>Welcome.</h1>
            <h2>
              Millions of movies, TV shows and people to discover. Explore now.
            </h2>
          </div>
          <SearchForm />
        </div>
      </div>
      <div className="wrap-container">
        <h1>Popular Movies:</h1>
        {error && <div className="error-fetch">{error}</div>}
        {isLoading && <div className="loading">Loading...</div>}
        {popular && (
          <div className="movies-list">
            {popular.results.map((movie) => (
              <MoviesCard movie={movie} key={movie.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
