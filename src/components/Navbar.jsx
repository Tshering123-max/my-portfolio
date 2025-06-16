import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    backgroundColor: "#ffffff",
    padding: "1rem 2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 1000,
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };

  const navLinksStyle = {
    display: "flex",
    gap: "1.5rem",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#555",
    fontWeight: 500,
  };

  const activeLinkStyle = {
    color: "#007bff", // Active link color
    fontWeight: "bold",
  };

  return (
    <nav style={navStyle}>
      <div className="nav-logo">
        <Link
          to="/"
          style={{
            ...linkStyle,
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#333",
          }}
        >
          MyPortfolio
        </Link>
      </div>
      <div style={navLinksStyle}>
        <NavLink
          to="/"
          end
          style={({ isActive }) =>
            isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) =>
            isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle
          }
        >
          About
        </NavLink>
        <NavLink
          to="/blogs"
          style={({ isActive }) =>
            isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle
          }
        >
          Blogs
        </NavLink>
        <NavLink
          to="/contact"
          style={({ isActive }) =>
            isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle
          }
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
