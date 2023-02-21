import { useState } from "react";

const Home = () => {

  const [searchString, setSearchString] = useState();

  return (
    <div className="homepage">
      <form>
        <input type="text" name="search" placeholder="search for movie..." />
        <button className="btn btn-primary">Search</button>
      </form>
    </div>
  );
};

export default Home;
