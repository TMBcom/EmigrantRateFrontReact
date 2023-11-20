import React from 'react';
import style from './Login_Button.module.css';


function Login_Button() {
    return(
      <div className={style.Login_Button}>
       <button className={style.button}>Войти</button>
      </div>

    );
}

export default Login_Button;