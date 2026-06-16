import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";

function EditMovie() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState({
    title: "",
    genre: "",
    rating: "",
    poster: "",
  });

  useEffect(() => {
    fetchMovie();
  }, []);

  const fetchMovie = async () => {
    const res = await api.get(`/movies/${id}`);
    setMovie(res.data);
  };

  const handleChange = (e) => {
    setMovie({
      ...movie,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await api.put(`/movies/${id}`, movie);

    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Movie</h2>

      <input
        type="text"
        name="title"
        value={movie.title}
        onChange={handleChange}
      />

      <input
        type="text"
        name="genre"
        value={movie.genre}
        onChange={handleChange}
      />

      <input
        type="text"
        name="rating"
        value={movie.rating}
        onChange={handleChange}
      />

      <input
        type="text"
        name="poster"
        value={movie.poster}
        onChange={handleChange}
      />

      <button type="submit">
        Update Movie
      </button>
    </form>
  );
}

export default EditMovie;