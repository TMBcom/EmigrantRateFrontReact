import React from 'react';
import style from './LogRegPage.module.css';
import LoginMain from './LoginMain/LoginMain';
import RegistrationMain from './RegistrationMain/RegistrationMain';
import {Routes, Route} from "react-router-dom";
import EmigrantPage_Main from './../SearchPage/EmigrantPage_Main/EmigrantPage_Main';

function LogRegPage() {
    return(
    <div className={style.LogReg}>
    <Routes>
        <Route path="/LoginPage" element={<LoginMain />}/>
        <Route path="/EmigrantPage" element={<EmigrantPage_Main />}/>
        <Route path="/RegistrationPage" element={<RegistrationMain />}/>
    </Routes>
        </div>

    );
}

export default LogRegPage;