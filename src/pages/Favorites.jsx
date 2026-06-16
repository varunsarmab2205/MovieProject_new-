import { useSelector, useDispatch } from "react-redux";

function Favorites() {
  const favorites = useSelector((state) => state.favorites.items);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: "20px" }}>
      <h1>My Favorites</h1>

      {favorites.length === 0 ? (
        <p>No favorite movies added yet.</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {favorites.map((movie) => (
            <div
              key={movie.id}
              style={{
                width: "200px",
                border: "1px solid #ccc",
                padding: "10px",
              }}
            >
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
                style={{ width: "100%" }}
              />
              <h4>{movie.title}</h4>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;