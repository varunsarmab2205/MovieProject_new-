import { useEffect, useState } from "react";
import { fetchMovies } from "../services/api";

const BASE_URL = "https://moviebackend-negq.onrender.com";

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMovies()
      .then((data) => {
        console.log("API RESPONSE:", data);

        const list = data?.movies || data || [];

        console.log("FIRST MOVIE:", list[0]);

        setMovies(list);
        setLoading(false);
      })
      .catch((err) => {
        console.log("ERROR:", err);
        setMovies([]);
        setLoading(false);
      });
  }, []);

  // 🔥 UNIVERSAL IMAGE FIX FUNCTION
  const getImage = (movie) => {
    const img =
      movie.image ||
      movie.poster ||
      movie.poster_path ||
      movie.img ||
      movie.cover ||
      movie.thumbnail;

    if (!img) {
      return "https://dummyimage.com/200x300/cccccc/000000&text=No+Image";
    }

    if (img.startsWith("http")) return img;

    return `${BASE_URL}/${img.replace(/^\/+/, "")}`;
  };

  if (loading) {
    return <h2 style={{ padding: "20px" }}>Loading movies...</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>🎬 Movies</h1>

      {movies.length === 0 ? (
        <p>No movies found</p>
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "15px",
          }}
        >
          {movies.map((movie) => (
            <div
              key={movie._id || movie.id}
              style={{
                width: "200px",
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "10px",
              }}
            >
              {/* IMAGE (100% FIXED) */}
              <img
                src={getImage(movie)}
                alt={movie.title || "movie"}
                style={{
                  width: "100%",
                  height: "280px",
                  objectFit: "cover",
                  borderRadius: "5px",
                }}
                onError={(e) => {
                  e.target.src =
                    "https://dummyimage.com/200x300/cccccc/000000&text=No+Image";
                }}
              />

              {/* TITLE */}
              <h3 style={{ fontSize: "16px" }}>
                {movie.title || movie.name || "No Title"}
              </h3>

              {/* DESCRIPTION */}
              <p style={{ fontSize: "12px" }}>
                {movie.description ||
                  movie.overview ||
                  movie.desc ||
                  "No description available"}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;