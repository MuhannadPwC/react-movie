import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// Layouts
import RootLayout from "./layouts/RootLayout";
import UserListLayout from "./layouts/UserListLayout";

// Pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Watched from "./pages/user/Watched";
import WatchLater from "./pages/user/WatchLater";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="user" element={<UserListLayout />}>
        <Route path="watchlater" element={<WatchLater />} />
        <Route path="watched" element={<Watched />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
