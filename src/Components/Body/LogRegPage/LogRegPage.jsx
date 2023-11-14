import React from 'react';
import style from './LogRegPage.module.css';
import LoginMain from './LoginMain/LoginMain';
import RegistrationMain from './RegistrationMain/RegistrationMain';
import {Routes, Route} from "react-router-dom";

function LogRegPage() {
    var IsPageExit = true;
    return(
    <div className={style.LogReg}>
    <Routes>
        <Route path="/LoginPage" element={IsPageExit ? (<LoginMain />) : (<h1>No page found...</h1>)}/>
        <Route path="/RegistrationPage" element={<RegistrationMain />}/>
    </Routes>
        </div>

    );
}

export default LogRegPage;