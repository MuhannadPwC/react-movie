import { Outlet } from "react-router-dom";

const MoviesLayout = () => {
  return (
    <div className="movies-layout">

      
      <Outlet />
    </div>
  );
}
 
export default MoviesLayout;