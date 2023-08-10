import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./store.css";

function Layout() {
  return (
    <div className="layout">
      <nav>
        <Link className="links" to="/">
          Go home
        </Link>

        <Link className="links" to="/aboutus">
          Go to about us
        </Link>

        <Link className="links" to="/contact">
          Go to contact
        </Link>

        <Link className="links" to="/cryptids">
          Go to cryptids
        </Link>
      </nav>

      <Outlet />
    </div>
  );
}

export default Layout;
