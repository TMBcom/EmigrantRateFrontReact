import React from 'react';
import style from './Header_Body.module.css';
import {Link} from "react-router-dom";

function Header_Body() {
    return(
      <div className={style.Header_Body}>
         <Link to='/EmigrantPage'>Emigrant</Link>
       |
       <Link to='/EmployerPage'>Employer</Link> 
      </div>

    );
}

export default Header_Body;