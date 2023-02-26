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
            <form>
              <label>
                <input
                  type="text"
                  name="search"
                  placeholder="search for movie..."
                />
              </label>
              <button className="search-btn">Search</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
