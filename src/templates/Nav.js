import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <ul>
      <Link to="/Classes">
        <li>Home</li>
      </Link>
      <Link to="/Search">
        <li>Search</li>
      </Link>
      <Link to="/Schedule">
        <li>My Schedule</li>
      </Link>
      <li>Log Out</li>
    </ul>
  );
};

export default Nav;
