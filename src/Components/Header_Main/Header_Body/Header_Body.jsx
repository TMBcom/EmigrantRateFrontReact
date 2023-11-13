import React from 'react';
import style from './Header_Body.module.css';
import {Link} from "react-router-dom";

function Header_Body() {
    return(
      <div className={style.Header_Body}>
         <Link to='/EmigrantPage'>Для эмигрантов</Link>
       |
       <Link to='/EmployerPage'>Для работодателей</Link> 
      </div>

    );
}

export default Header_Body;