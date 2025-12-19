import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img
        src="https://cataas.com/cat"
        alt="Avatar gato"
        className="avatar"
      />

      <div className="menu">
        <Link to="/">Navegador</Link>
        <Link to="/chuck">Chuck Norris</Link>
        <Link to="/sobre">Sobre</Link>
      </div>
    </nav>
  );
}
