import React from 'react';
import style from './Body_Main.module.css';
import {Routes, Route} from "react-router-dom";
import MainPage from './MainPage/MainPage';
import LoginMain from './LogRegPage/LoginMain/LoginMain';
import RegistrationMain from './LogRegPage/RegistrationMain/RegistrationMain';
import Layout from './Layout.jsx';
import EmigrantPage_Main from './SearchPage/EmigrantPage_Main/EmigrantPage_Main';
import EmployersPage_Main from './SearchPage/EmployersPage_Main/EmployersPage_Main';

let IsPageExit = true;
function Body_Main() {
    return(
        <div class={style.Body_Main}>
            <Routes>
                <Route path="/" element={<Layout />}>
        <Route index path="/" element={IsPageExit ? (<MainPage/>) : (<h1>No page found...</h1>)}/>
        <Route path="LoginPage" element={<LoginMain/>}/>
        <Route path="RegistrationPage" element={<RegistrationMain/>}/>
        <Route path="EmigrantPage" element={<EmigrantPage_Main/>}/>
        <Route path="EmployerPage" element={<EmployersPage_Main/>}/>
        </Route>
    </Routes>
      </div>
    );
}

export default Body_Main;