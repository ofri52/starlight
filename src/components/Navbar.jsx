import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { LuSearch, LuGamepad2, LuSettings } from "react-icons/lu";
import Logo from "./Logo";

function Navbar() {
  const location = useLocation();
  if (location.pathname === "/go") {
    return <></>;
  }

  return (
    <div className="navbar m-3.5 bg-base-300 rounded-btn px-6 w-[calc(100vw-1.9rem)] background-filter transition-all sticky">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost normal-case text-xl items-center">
          <Logo width="30px" height="30px" />
          <p className="sm:block hidden">Starlight</p>
        </Link>
      </div>
      <div className="navbar-end gap-2">
        <NavLink
          to="/science"
          className={({ isActive }) =>
            `btn normal-case text-xl ${isActive ? "btn-primary" : "btn-ghost"}`
          }
        >
          <LuGamepad2 size={24} />
          <p className="sm:block hidden">Games</p>
        </NavLink>
        <NavLink
          to="/math"
          className={({ isActive }) =>
            `btn normal-case text-xl ${isActive ? "btn-primary" : "btn-ghost"}`
          }
        >
          <LuSearch size={24} />
          <p className="sm:block hidden">Search</p>
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `btn normal-case text-xl ${isActive ? "btn-primary" : "btn-ghost"}`
          }
        >
          <LuSettings size={24} />
          <p className="sm:block hidden">Settings</p>
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
