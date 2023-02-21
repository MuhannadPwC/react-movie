import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Page not found!</h2>
      <p>
        We're sorry we couldn't find what you're looking for. <br /> <br />
        This might've been a problem on your end or ours, please
        go back to homepage and try again.
      </p>

      <p>
        Go to the <NavLink to="/" className="btn btn-primary">Homepage</NavLink>.
      </p>
    </div>
  );
};

export default NotFound;
