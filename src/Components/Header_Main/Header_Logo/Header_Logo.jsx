import React from 'react';
import style from './Header_Logo.module.css';
import {Link} from "react-router-dom";
import Web_Logo from './Logo_img/EmigrantLog.svg'

function Header_Logo() {
    return(
      <div className={style.Header_Logo}>
       <Link to='/'><img src={Web_Logo} alt="TMB_Logo" width={400}/>
       </Link>
      </div>

    );
}

export default Header_Logo;