import React from 'react';
import style from './LogRegPage.module.css';
import LoginMain from './LoginMain/LoginMain';

function LogRegPage() {
    return(
    <div className={style.LogReg}>
        <LoginMain />
        </div>
    );
}

export default LogRegPage;