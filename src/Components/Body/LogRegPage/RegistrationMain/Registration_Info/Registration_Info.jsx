import React from 'react';
import style from './Registration_Info.module.css';
import Registration_Name from './Registration_Name/Registation_Name';
import Registration_Password from './Registration_Password/Registration_Password';
import Registration_ConfirmPassword from './Registation_ConfirmPassword/Registration_ConfirmPassword';


function Registration_Info() {
    return(
      <div className={style.Registration_Info}>
        <Registration_Name/>
        <Registration_Password/>
        <Registration_ConfirmPassword/>
      </div>

    );
}

export default Registration_Info;