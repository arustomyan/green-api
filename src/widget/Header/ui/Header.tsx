import style from "./Header.module.css";

export const Header = () => {
  return (
    <header className={style.header}>
      <p className={style.logo}>green api</p>
      <button className={style.button}>выйти</button>
    </header>
  );
};
