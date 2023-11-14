import React from 'react';
import style from './Login_Password.module.css';


function Login_Password() {
    return(
      <div className={style.Login_Password}>
      <div className={style.Login_Text}>Пароль</div>
       <input type="password" size="30"/>
      </div>

    );
}

export default Login_Password;