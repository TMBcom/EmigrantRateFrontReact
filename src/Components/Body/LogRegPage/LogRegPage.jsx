import React from 'react';
import style from './LogRegPage.module.css';
import LoginMain from './LoginMain/LoginMain';
import RegistrationMain from './RegistrationMain/RegistrationMain';

function LogRegPage() {
    return(
    <div className={style.LogReg}>
        <LoginMain />
        <RegistrationMain />
        </div>
    );
}

export default LogRegPage;