import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>SCP Foundation</h1>

      <div>
        <Link to="/">Home</Link>
        <Link to="/add">Add SCP</Link>
      </div>
    </nav>
  );
}

export default Navbar;