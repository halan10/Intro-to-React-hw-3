import { Link } from "react-router-dom";
import "./Navbar.css";
export function Navbar() {
  return (
    <nav>
      <ul>
        <li>Welcome to Task Management!</li>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/tasks_api">Tasks with API</Link>
        </li>
        <li>
          <Link to="/tasks">Tasks</Link>
        </li>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
      </ul>
    </nav>
  );
}
