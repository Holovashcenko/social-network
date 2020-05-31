import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img
        src="https://avatarko.ru/img/kartinka/1/multfilm_gomer.png"
        alt="logo"
      />
      <div className={s.loginBlock}>
        {props.isAuth
          ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
          : <NavLink to="/login">Login</NavLink>}
      </div>
    </header>
  );
}

export default Header;
