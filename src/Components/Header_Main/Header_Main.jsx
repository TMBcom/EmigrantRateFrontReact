import React from 'react';
import style from './Header_Main.module.css';
import Header_Logo from './Header_Logo/Header_Logo';
import Header_Body from './Header_Body/Header_Body';
import Header_LogReg from './Header_LogReg/Header_LogReg';
import {Routes, Route} from "react-router-dom";
import Header_Profile from './Header_Profile/Header_Profile';

let IsPageExit = true;
function Header() {
    return(
      <div class={style.Header_Main}>
        
          <Header_Logo/>
          <Header_Body/>
          <Routes>
        <Route path="*" element={IsPageExit ? (<Header_LogReg/>) : (<h1>No page found...</h1>)}/>
        <Route path="/Profile" element={<Header_Profile/>}/>
    </Routes>
    </div>

    );
}

export default Header;