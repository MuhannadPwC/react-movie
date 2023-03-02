import { Form } from "react-router-dom";

const SearchForm = () => {

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
            />
          </label>
          <button className="search-btn">Search</button>
          <div className="filters">
            <select name="genre" id="genre" className="genre">
              <option disabled selected value=''>select a genre</option>
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
              type="text"
              name="rating"
              id="rating"
              className="rating"
              placeholder="Enter rating..."
              autoComplete="off"
            />
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SearchForm;

export const searchAction = async ({ request }) => {
  const data = await request.formData();

  const submission = {
    search: data.get('search'),
    genre: data.get('genre'),
    year: data.get('year'),
    rating: data.get('rating')
  }
  console.log(submission);

  return submission;
}