import { useState } from "react";
import { Link } from "react-router";

function Header() {
  return (
    <header className="header">
      <ul className="header__list">
        <li className="header__list-item">
          <Link className="header__list-link" to="/">
            Home
          </Link>
        </li>
        <li className="header__list-item">
          <Link className="header__list-link" to="/category">
            Categories
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
