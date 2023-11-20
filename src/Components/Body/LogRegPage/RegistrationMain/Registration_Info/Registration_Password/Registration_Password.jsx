import React from 'react';
import style from './Registration_Password.module.css';


function Registration_Password() {
    return(
      <div className={style.Registration_Password}>
        <div className={style.Registration_Text}>Пароль</div>
       <input type="password" size="30"/>
      </div>

    );
}

export default Registration_Password;