import { clsx } from "clsx";
import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

export default function AuthNav() {
  return (
    <div>
      <NavLink
        to="/login"
        className={({ isActive }) => {
          return clsx(css.link, isActive && css.active);
        }}
      >
        Login In
      </NavLink>
    </div>
  );
}
