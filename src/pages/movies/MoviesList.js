import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import MoviePanel from "../../components/MoviePanel";
import SearchForm from "../../components/SearchForm";
import SearchFetch from "../../Fetch/SearchFetch";
import { api_key, url } from "../../Global";

const MoviesList = () => {
  const [page, setPage] = useState(1);
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");
  const genre = searchParams.get("genre");
  const year = searchParams.get("year");
  const rating = searchParams.get("rating");
  const { data, isLoading, error } = SearchFetch(
    `${url}/search/movie?api_key=${api_key}&query=${search}&page=${page}&year=${year}`
  );
  let movies = data ? data.results : [];

  if (genre !== null) {
    movies = movies.filter((movie) => {
      let flag = false;
      movie.genre_ids.forEach(genreId => {
        if (genreId === parseInt(genre)) {
          flag = true
        }
      })
      return flag;
    });
  }
  if (rating !== "") {
    movies = movies.filter((movie) => {
      return Math.round(movie.vote_average) >= parseInt(rating);
    });
  }
  const err =
    movies.length === 0 || error
      ? "No Movies were found, try searching again"
      : null;

  const handleNext = () => {
    if (page !== data.total_pages) {
      setPage(page + 1);
      window.scrollTo(0, 0);
    } else {
      return;
    }
  };
  const handlePrev = () => {
    if (page !== 1) {
      setPage(page - 1);
      window.scrollTo(0, 0);
    } else {
      return;
    }
  };
  console.log(movies);

  return (
    <>
      <div className="filter-search">
        <SearchForm
          searchTerm={search}
          searchGenre={genre}
          searchRating={rating}
          searchYear={year}
        />
      </div>
      <div className="movies-page" id="top">
        {err && <div className="movie-error">{err}</div>}
        {isLoading && <div className="loading">Loading...</div>}
        {movies && (
          <div className="movie-grid">
            {movies &&
              movies.map((movie) => (
                <MoviePanel movie={movie} key={movie.id} />
              ))}
          </div>
        )}
        {!err && (
          <div className="pagenum-container">
            <div className="prev-btn">
              <button disabled={page === 1} onClick={handlePrev}>
                Prev
              </button>
            </div>
            <div className="page-number">
              <p>{page}</p>
              <p>out of</p>
              <p>{data.total_pages}</p>
            </div>
            <div className="next-btn">
              <button disabled={page === data.total_pages} onClick={handleNext}>
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MoviesList;
