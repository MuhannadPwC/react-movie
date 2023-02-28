import { Form } from "react-router-dom";

const FilterSearch = () => {
  return (
    <Form method="GET" action="/movies">
      <div className="filter-search">
        <div className="search-bar">
          <input
            type="text"
            name="search"
            id="search"
            autoComplete="off"
            placeholder="Search for movie..."
          />
          <button>Search</button>
        </div>
        <div className="filters">
          <select name="genre" id="genre" placeholder="Genre">
            <option value="action">Action</option>
            <option value="drama">Drama</option>
            <option value="comedy">Comedy</option>
          </select>
          <input
            type="text"
            name="year"
            id="year"
            placeholder="Enter Year..."
            autoComplete="off"
          />
          <input
            type="text"
            name="rating"
            id="rating"
            placeholder="Enter rating..."
            autoComplete="off"
          />
        </div>
      </div>
    </Form>
  );
};

export default FilterSearch;
