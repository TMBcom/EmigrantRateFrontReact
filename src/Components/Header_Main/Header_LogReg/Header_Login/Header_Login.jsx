import React from 'react';
import style from './Header_Login.module.css';
import {Link} from "react-router-dom";

function Header_Login() {
    return(
      <div className={style.Header_Login}>
       <Link to='/LoginPage'>Войти</Link>
      </div>

    );
}

export default Header_Login;