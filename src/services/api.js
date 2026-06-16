import axios from "axios";

const api = axios.create({
  baseURL: "https://moviebackend-negq.onrender.com",
});

// ✅ Add these functions
export const fetchMovies = async () => {
  const res = await api.get("/movies");
  return res.data;
};

export const fetchMovieDetails = async (id) => {
  const res = await api.get(`/movies/${id}`);
  return res.data;
};

export default api;