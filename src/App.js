import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MoviesLayout from "./layouts/MoviesLayout";

// Layouts
import RootLayout from "./layouts/RootLayout";

// Pages
import Home from "./pages/Home";
import MovieDetails, { movieDetailsLoader } from "./pages/movies/MovieDetails";
import MoviesList, { moviesListLoader } from "./pages/movies/MoviesList";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/movies" element={<MoviesLayout />}>
        <Route index element={<MoviesList />} loader={moviesListLoader} />
        <Route path=":id" element={<MovieDetails />} loader={movieDetailsLoader} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
