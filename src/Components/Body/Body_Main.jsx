import React from 'react';
import LogRegPage from './LogRegPage/LogRegPage';
import style from './Body_Main.module.css';

function Body_Main() {
    return(
        <div className={style.Body_Main}>
    <LogRegPage />
    </div>
    );
}

export default Body_Main;