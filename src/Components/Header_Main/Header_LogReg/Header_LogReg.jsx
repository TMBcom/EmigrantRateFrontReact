import React from 'react';
import style from './Header_LogReg.module.css';
import Header_Reg from './Header_Reg/Header_Reg';
import Header_Login from './Header_Login/Header_Login';

function Header_LogReg() {
    return(
      <div className={style.Header_LogReg}>
        <Header_Login/>
        <Header_Reg/>
      </div>
    );
}

export default Header_LogReg;