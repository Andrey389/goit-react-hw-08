import css from "./UserMenu.module.css";

export default function UserMenu() {
  return (
    <div className={css.userContainer}>
      <p className={css.userName}>Welcome user</p>
      <button type="button">Logout</button>
    </div>
  );
}
