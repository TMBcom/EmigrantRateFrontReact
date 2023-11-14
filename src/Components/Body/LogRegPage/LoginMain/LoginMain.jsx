import React from 'react';
import style from './LoginMain.module.css';
import Login_Logo from './Login_Logo/Login_Logo';
import Login_Info from './Login_Info/Login_Info';
import Login_Button from './Login_Button/Login_Button';
import Body_Main from './../../Body_Main';

function LoginMain() {
    return(
    <div className={style.Login_Main}>
        <Login_Logo/>
        <Login_Info/>
       <Login_Button/>
        </div>
    );
}

export default LoginMain;