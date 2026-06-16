import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <div style={{ width: "200px" }}>
      <img
        style={{ width: "100%" }}
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title}
      />

      <h4>{movie.title}</h4>

      <Link to={`/movie/${movie.id}`}>View Details</Link>
    </div>
  );
}

export default MovieCard;