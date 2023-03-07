import { useState } from "react";
import { Form } from "react-router-dom";
import FetchGenres from "../Fetch/FetchGenres";
import { api_key, url } from "../Global";

const SearchForm = ({ searchTerm, searchGenre, searchYear, searchRating }) => {
  searchTerm = searchTerm ? searchTerm : "";
  searchGenre = searchGenre ? searchGenre : "";
  searchYear = searchYear ? searchYear : "";
  searchRating = searchRating ? searchRating : "";
  const [search, setSearch] = useState(searchTerm);
  const [genre, setGenre] = useState(searchGenre);
  const [year, setYear] = useState(searchYear);
  const [rating, setRating] = useState(searchRating);

  const { genres: allGenres } = FetchGenres(
    `${url}/genre/movie/list?api_key=${api_key}&language=en-US`
  );

  return (
    <div className="searchform">
      <div>
        <Form method="get" action="/movies">
          <label>
            <input
              type="text"
              name="search"
              className="search"
              placeholder="search for movie..."
              autoComplete="off"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </label>
          <button className="search-btn">Search</button>
          <div className="filters">
            <select
              name="genre"
              id="genre"
              className="genre"
              defaultValue=""
              onChange={(e) => {
                setGenre(e.target.value);
              }}
            >
              <option value={genre} disabled>Select a Genre</option>
              {allGenres &&
                allGenres.genres.map((genre) => (
                  <option value={genre.id} key={genre.id}>{genre.name}</option>
                ))}
            </select>
            <input
              type="text"
              name="year"
              id="year"
              className="year"
              placeholder="Enter Year..."
              value={year}
              onChange={(e) => {
                setYear(e.target.value);
              }}
              autoComplete="off"
            />
            <input
              type="number"
              name="rating"
              id="rating"
              className="rating"
              placeholder="Enter rating..."
              autoComplete="off"
              value={rating}
              onChange={(e) => {
                setRating(e.target.value);
              }}
              max={10}
              min={0}
            />
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SearchForm;
