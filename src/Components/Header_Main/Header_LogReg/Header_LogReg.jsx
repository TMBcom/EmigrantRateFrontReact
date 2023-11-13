import React from 'react';
import style from './Header_LogReg.module.css';


function Header_LogReg() {
    return(
      <div className={style.Header_LogReg}>
       <a href='#'>Login</a>
       |
       <a href='#'>Registration</a>
      </div>

    );
}

export default Header_LogReg;