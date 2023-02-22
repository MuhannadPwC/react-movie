import { NavLink, Outlet, ScrollRestoration } from "react-router-dom";

const RootLayout = () => {
  return ( 
    <div className="rootlayout">
      <ScrollRestoration />
      <header>
        <nav>
          <h1>Movie React App</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/user">User</NavLink>

        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
   );
}
 
export default RootLayout;