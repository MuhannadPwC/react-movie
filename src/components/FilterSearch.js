import { Form } from "react-router-dom";

const FilterSearch = () => {
  return (
    <div className="filter-search">
      <Form method="GET" action="/movies">
        <div className="search-bar">
          <input type="text" name="search" id="search" placeholder="Search for movie..." />
          <button>Search</button>
        </div>
        <div className="filters">
          <select name="genre" id="genre" placeholder="Genre">
            <option value="">Action</option>
            <option value="">Drama</option>
            <option value="">Comedy</option>
          </select>
          <input type="text" name="year" id="year" placeholder="Enter Year..."/>
          <input type="text" name="rating" id="rating" placeholder="Enter rating..."/>
        </div>
      </Form>
    </div>
  );
};

export default FilterSearch;
