import React from 'react';
import style from './Body_Main.module.css';
import {Routes, Route} from "react-router-dom";
import MainPage from './MainPage/MainPage';
import LoginMain from './LogRegPage/LoginMain/LoginMain';
import RegistrationMain from './LogRegPage/RegistrationMain/RegistrationMain';
import Layout from './Layout.jsx';

let IsPageExit = true;
function Body_Main() {
    return(
        <div class={style.Body_Main}>
            <Routes>
                <Route path="/" element={<Layout />}>
        <Route index path="MainPage" element={IsPageExit ? (<MainPage/>) : (<h1>No page found...</h1>)}/>
        <Route path="LoginPage" element={<LoginMain/>}/>
        <Route path="RegistrationPage" element={<RegistrationMain/>}/>
        </Route>
    </Routes>
      </div>
    );
}

export default Body_Main;