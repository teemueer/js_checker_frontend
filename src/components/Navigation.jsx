import { Link } from "react-router-dom";

const Navigation = ({ user, logout }) => (
  <nav>
    <span className="title">HTML & JS Checker</span>
    <span>
      <Link to="/">Courses</Link>
    </span>
    <span className="logout">
      <button onClick={logout}>Logout</button>
    </span>
  </nav>
);

export default Navigation;
