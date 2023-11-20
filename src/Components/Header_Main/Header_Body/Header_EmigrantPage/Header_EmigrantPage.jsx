import React from 'react';
import style from './Header_EmigrantPage.module.css';
import {Link} from "react-router-dom";

function Header_EmigrantPage() {
    return(
      <div className={style.Header_EmigrantPage}>
       <Link to='/EmigrantPage'>Работа</Link>
      </div>

    );
}

export default Header_EmigrantPage;