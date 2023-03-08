import { NavLink, Outlet } from "react-router-dom";

const UserListLayout = () => {
  return (
    <div className="user-layout">
      <nav className="list-links">
        <NavLink to={"watchlater"}>Watch Later</NavLink>
        <NavLink to={"favourites"}>Favourites</NavLink>
      </nav>


      <Outlet />
    </div>
  );
}
 
export default UserListLayout;