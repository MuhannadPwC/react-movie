import { Form } from "react-router-dom";

const SearchForm = () => {
  return (
    <div className="searchform">
      <div className="flex-container">
        <div className="title">
          <div>
            <h1>Welcome.</h1>
            <h2>
              Millions of movies, TV shows and people to discover. Explore now.
            </h2>
          </div>
          <div>
            <Form method="get" action="/movies">
              <label>
                <input
                  type="text"
                  name="search"
                  placeholder="search for movie..."
                  autoComplete="off"
                />
              </label>
              <button className="search-btn">Search</button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
