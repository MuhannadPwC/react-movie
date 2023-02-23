import { NavLink, Outlet, ScrollRestoration } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="rootlayout">
      <ScrollRestoration />
      <header>
        <nav>
          <div className="logo">
            <NavLink to="/">
              <img
                src={
                  "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                }
                alt="logo"
                width={"154"}
                height={"20"}
              />
            </NavLink>
          </div>
          <div className="flexbox">
            <button className="lng-btn">EN</button>
            <img
              src={
                "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-28-search-blue-177462d06db81ff2a02aa022c1c0be5ba4200d7bd3f51091ed9298980e3a26a1.svg"
              }
              alt="search"
              width="30"
              height="50"
            />
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>

      <footer>
        <img
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
          alt="logo"
          width="130"
          height="94"
        />
      </footer>
    </div>
  );
};

export default RootLayout;
