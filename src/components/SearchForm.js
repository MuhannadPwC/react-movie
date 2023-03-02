import { useState } from "react";
import { Form } from "react-router-dom";

const SearchForm = () => {
  const [search, setSearch] = useState();

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
              onChange={e => {setSearch(e.target.value)}}
            />
          </label>
          <button className="search-btn">Search</button>
          <div className="filters">
            <select name="genre" id="genre" className="genre" defaultValue="">
              <option disabled value=''>select a genre</option>
              <option value="28">Action</option>
              <option value="18">Drama</option>
              <option value="35">Comedy</option>
            </select>
            <input
              type="text"
              name="year"
              id="year"
              className="year"
              placeholder="Enter Year..."
              autoComplete="off"
            />
            <input
              type="number"
              name="rating"
              id="rating"
              className="rating"
              placeholder="Enter rating..."
              autoComplete="off"
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