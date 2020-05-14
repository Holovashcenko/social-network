import React from "react";
import s from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img
        src="https://avatarko.ru/img/kartinka/1/multfilm_gomer.png"
        alt="logo"
      />
    </header>
  );
}

export default Header;
