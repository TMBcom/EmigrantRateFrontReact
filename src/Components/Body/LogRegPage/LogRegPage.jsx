import React from 'react';
import style from './LogRegPage.module.css';
import LoginMain from './LoginMain/LoginMain';
import RegistrationMain from './RegistrationMain/RegistrationMain';
import {Routes, Route} from "react-router-dom";

function LogRegPage() {
    return(
    <div className={style.LogReg}>
    <Routes>
        <Route path="/LoginPage" element={<LoginMain />}/>
        <Route path="/RegistrationPage" element={<RegistrationMain />}/>
    </Routes>
        </div>

    );
}

export default LogRegPage;