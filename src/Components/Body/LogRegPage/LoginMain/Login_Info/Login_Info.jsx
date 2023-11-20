import React from 'react';
import style from './Login_Info.module.css';
import Login_Name from './Login_Name/Login_Name';
import Login_Password from './Login_Password/Login_Password';


function Login_Info() {
    return(
      <div className={style.Login_Info}>
       <Login_Name/>
       <Login_Password/>
      </div>

    );
}

export default Login_Info;