import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { getUser } from "../../utils/storage";

interface NavBarProps {}

const NavBar: FC<NavBarProps> = () => {
  const location = useLocation();
  const currentUser = getUser();

  return (
    <>
      {location.pathname !== "/login" && (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link className="navbar-brand" to="/">
              Key Finder
            </Link>
            {currentUser?.name}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/logout">
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default NavBar;
