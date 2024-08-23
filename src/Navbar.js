import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar({ isLoggedIn, onLogout }) {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        PROFS
      </Link>
      <ul>
        {isLoggedIn ? (
          <>
          
            <li>
            <CustomLink to="/dashboard">Dashboard</CustomLink>
            </li>
            <li>
            <button onClick={onLogout} className="logout-button">
                Logout
            </button>
            </li>
            
          </>
        ) : (
          <>
          <ul>
          <li>
          <CustomLink to="/dashboard">Dashboard</CustomLink>
          </li>
          <li>
          <CustomLink to="/login">Login</CustomLink>
          </li>
          </ul>
          </>
        )}
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
