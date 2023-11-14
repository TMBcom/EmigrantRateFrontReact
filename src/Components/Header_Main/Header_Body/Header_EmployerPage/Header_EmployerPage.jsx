import React from 'react';
import style from './Header_EmployerPage.module.css';
import {Link} from "react-router-dom";

function Header_EmployerPage() {
    return(
      <div className={style.Header_EmployerPage}>
       <Link to='/EmployerPage'>Эмигранты</Link> 
      </div>

    );
}

export default Header_EmployerPage;