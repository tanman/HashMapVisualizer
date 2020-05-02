import React from "react";

// stateless functional component
const Navbar = ({ totalItems }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand mb-0 h1">
        Shopping Cart
        <span className="badge badge-pill badge-secondary m-2">
          {totalItems}
        </span>
      </span>
    </nav>
  );
};

export default Navbar;
