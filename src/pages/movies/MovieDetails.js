import { useLoaderData } from "react-router-dom";
import MoviesCard from "../../components/MoviesCard";

const MovieDetails = () => {
  const movie = useLoaderData();

  return (
    <div className="movie-details">
      <MoviesCard movie={movie} />
    </div>
  );
}
 
export default MovieDetails;

export const movieDetailsLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=0557b758465b10519557edb25fc53d86&language=en-US`);

  return res.json();
}