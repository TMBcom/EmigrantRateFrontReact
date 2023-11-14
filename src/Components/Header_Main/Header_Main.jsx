import React from 'react';
import style from './Header_Main.module.css';
import Header_Logo from './Header_Logo/Header_Logo';
import Header_Body from './Header_Body/Header_Body';
import Header_LogReg from './Header_LogReg/Header_LogReg';


function Header() {
    return(
      <div class={style.Header_Main}>
        
          <Header_Logo/>
          <Header_Body/>
          <Header_LogReg/>
    </div>

    );
}

export default Header;