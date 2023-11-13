import React from 'react';
import style from './RegistrationConfirmPassword.module.css';


function Registration_ConfirmPassword() {
    return(
      <div className={style.Registration_ConfirmPassword}>
       <div className={style.ConfirmPassword_Text}>
        Подтвердите пароль</div>
       <input type="password"  size="30"/>
      </div>

    );
}

export default Registration_ConfirmPassword;