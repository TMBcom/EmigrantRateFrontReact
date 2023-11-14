import React from 'react';
import style from './Body_Main.module.css';
import LogRegPage from './LogRegPage/LogRegPage';

function Body_Main() {
    return(
        <div class={style.Body_Main}>
            <LogRegPage/>
      </div>
    );
}

export default Body_Main;