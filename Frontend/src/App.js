import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// Layouts
import RootLayout from "./layouts/RootLayout";
import UserListLayout from "./layouts/UserListLayout";
import MoviesLayout from "./layouts/MoviesLayout";

// Pages
import Home from "./pages/Home";
import MovieDetails, { movieDetailsLoader } from "./pages/movies/MovieDetails";
import MoviesList from "./pages/movies/MoviesList";
import NotFound from "./pages/NotFound";
import Favourites from "./pages/user-list/Favourites";
import WatchLater from "./pages/user-list/WatchLater";
import Login from "./pages/user/Login";
import SignUp from "./pages/user/SignUp";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/movies"
        element={<MoviesLayout />}
        errorElement={<NotFound />}
      >
        <Route index element={<MoviesList />} />
        <Route
          path=":id"
          element={<MovieDetails />}
          loader={movieDetailsLoader}
        />
      </Route>
      <Route path="/userlists" element={<UserListLayout />}>
        <Route path="watchlater" element={<WatchLater />} />
        <Route path="favourites" element={<Favourites />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
