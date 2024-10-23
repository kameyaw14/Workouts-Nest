import "./NavBar.css";
import { Link } from "react-router-dom"; // removed 'json'

const NavBar = () => {
  return (
    <div>
      <div className="container">
        <Link to="/">
          <h1 className="heading">CHIEF WORKOUTS</h1>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
