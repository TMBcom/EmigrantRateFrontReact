import React from 'react';
import style from './Header_Reg.module.css';
import {Link} from "react-router-dom";

function Header_Reg() {
    return(
      <div className={style.Header_Reg}>
       <Link to='/RegistrationPage'>Регистрация</Link>
      </div>

    );
}

export default Header_Reg;