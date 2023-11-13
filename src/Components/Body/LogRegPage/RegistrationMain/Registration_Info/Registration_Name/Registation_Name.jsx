import React from 'react';
import style from './Registration_Name.module.css';


function Registration_Name() {
    return(
      <div className={style.Registration_Name}>
       <div className={style.Login_Text}>Логин</div>
       <input type="email"  size="30"/>
      </div>

    );
}

export default Registration_Name;