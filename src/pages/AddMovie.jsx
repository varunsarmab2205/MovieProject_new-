import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function AddMovie() {
  const navigate = useNavigate();

  const [movie, setMovie] = useState({
    title: "",
    genre: "",
    rating: "",
    poster: "",
  });

  const handleChange = (e) => {
    setMovie({
      ...movie,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await api.post("/movies", movie);

    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Movie</h2>

      <input
        type="text"
        name="title"
        placeholder="Movie Name"
        onChange={handleChange}
      />

      <input
        type="text"
        name="genre"
        placeholder="Genre"
        onChange={handleChange}
      />

      <input
        type="text"
        name="rating"
        placeholder="Rating"
        onChange={handleChange}
      />

      <input
        type="text"
        name="poster"
        placeholder="Poster URL"
        onChange={handleChange}
      />

      <button type="submit">
        Add Movie
      </button>
    </form>
  );
}

export default AddMovie;