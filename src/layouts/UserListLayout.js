import { NavLink, Outlet } from "react-router-dom";

const UserListLayout = () => {
  return (
    <div className="userlist">
      <h1>Hello!</h1>
      <p>
        Here You'll find the movies you marked to watch later or have already
        watched
      </p>

      <nav>
        <NavLink to="watchlater">Watch later</NavLink>
        <NavLink to="watched">Watched</NavLink>
      </nav>

      <Outlet />
    </div>
  );
};

export default UserListLayout;
