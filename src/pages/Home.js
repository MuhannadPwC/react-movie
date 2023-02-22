import MoviesList from "../components/MoviesList";
import FetchPopular from "../Fetch/FetchPopular";

const Home = () => {

  const { data: popular, isLoading, error } = FetchPopular('https://api.themoviedb.org/3/movie/popular?api_key=0557b758465b10519557edb25fc53d86&language=en-US&page=1');

  return (
    <div className="homepage">
      <div className="flex-container">
        <div className="title">
          <h1>Welcome.</h1>
          <p>
            This is a React Movie App. Feel free to search for any movie you want.
          </p>
          <form>
            <input type="text" name="search" placeholder="search for movie..." />
            <button className="btn btn-primary">Search</button>
          </form>
        </div>
      </div>
      {error && <div className="error-fetch">{error}</div>}
      {isLoading && <div className="loading">Loading...</div>}
      {popular && (<MoviesList movies={popular.results} />)}
    </div>
  );
};

export default Home;
