import MoviesCard from "../components/MoviesCard";
import SearchForm from "../components/SearchForm";
import FetchPopular from "../Fetch/FetchPopular";

const Home = () => {
  const {
    data: popular,
    isLoading,
    error,
  } = FetchPopular(
    "https://api.themoviedb.org/3/movie/popular?api_key=0557b758465b10519557edb25fc53d86&language=en-US&page=1"
  );

  return (
    <div className="homepage">
      <SearchForm />
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
