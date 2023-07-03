import { NavLink } from "react-router-dom";

function NavigationLink() {
  return (
    <nav className="nav-link">
      <ul className="ul-link">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/post">Post</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationLink;
