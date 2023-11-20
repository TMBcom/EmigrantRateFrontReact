import React from 'react';
import style from './Login_Name.module.css';


function Login_Name() {
    return(
      <div className={style.Login_Name}>
       <div className={style.Login_Text}>Логин</div>
       <input type="email"  size="30"/>
      </div>

    );
}

export default Login_Name;