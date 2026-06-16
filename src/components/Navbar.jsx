import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#222", color: "white" }}>
      <Link to="/" style={{ marginRight: "10px", color: "white" }}>
        Home
      </Link>

      <Link to="/favorites" style={{ color: "white" }}>
        Favorites
      </Link>
    </nav>
  );
}

export default Navbar;