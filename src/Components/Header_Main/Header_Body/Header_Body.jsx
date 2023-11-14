import React from 'react';
import style from './Header_Body.module.css';
import {Link} from "react-router-dom";
import Header_EmigrantPage from './Header_EmigrantPage/Header_EmigrantPage';
import Header_EmployerPage from './Header_EmployerPage/Header_EmployerPage';

function Header_Body() {
    return(
      <div className={style.Header_Body}>
        <Header_EmigrantPage/>
        <Header_EmployerPage/>
      </div>

    );
}

export default Header_Body;