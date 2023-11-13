import React from 'react';
import style from './LogRegPage.module.css';
import LoginMain from './LoginMain/LoginMain';
import RegistrationMain from './RegistrationMain/RegistrationMain';
import {Routes, Route} from "react-router-dom";
import EmployersPage_Main from './../SearchPage/EmployersPage_Main/EmployersPage_Main';

function LogRegPage() {
    return(
    <div className={style.LogReg}>
    <Routes>
        <Route path="/LoginPage" element={<LoginMain />}/>
        <Route path="/EmigrantPage" element={<EmigrantPage_Main />}/>
        <Route path="/RegistrationPage" element={<RegistrationMain />}/>
        <Route path="/EmployerPage" element={<EmployersPage_Main/>}/>

    </Routes>
        </div>

    );
}

export default LogRegPage;