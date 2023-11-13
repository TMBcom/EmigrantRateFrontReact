import React from 'react';
import style from './Header_LogReg.module.css';
import {Link} from "react-router-dom";

function Header_LogReg() {
    return(
      <div className={style.Header_LogReg}>
       <Link to='/LoginPage'>Login</Link>
       |
       <Link to='/RegistrationPage'>Registration</Link>
      </div>
    );
}

export default Header_LogReg;