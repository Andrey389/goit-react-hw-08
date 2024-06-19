import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import { clsx } from "clsx";

export const Navigation = () => {
  return (
    <nav>
      <ul className={css.nav}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => {
              return clsx(css.link, isActive && css.active);
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contacts"
            className={({ isActive }) => {
              return clsx(css.link, isActive && css.active);
            }}
          >
            Contacts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
