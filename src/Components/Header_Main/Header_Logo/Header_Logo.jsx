import React from 'react';
import style from './Header_Logo.module.css';
import {Link} from "react-router-dom";

function Header_Logo() {
    return(
      <div className={style.Header_Logo}>
       <Link to='/MainPage'>"Здесь мог быть ваш логотип"</Link>
      </div>

    );
}

export default Header_Logo;