import React from 'react';
import style from './Link_Logo.module.css';
import Web_Logo from './Logo_img/EmigrantLog.svg'

function Link_Logo() {
    return(
      <div className={style.Link_Logo}>
      <img src={Web_Logo} alt="TMB_Logo" width={150}/>
      </div>

    );
}

export default Link_Logo;