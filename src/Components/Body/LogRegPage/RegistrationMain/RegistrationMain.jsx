import React from 'react';
import style from './RegistrationMain.module.css';
import Registration_Logo from './Registration_Logo/RegistrationLogo';
import Registration_Button from './Registration_Button/Registration_Button';
import Registration_Info from './Registration_Info/Registration_Info';

function RegistrationMain() {
    return(
    <div className={style.Registration_Main}>
        <div className={style.Registration_Container}>
        <Registration_Logo/>
        <Registration_Info/>
       <Registration_Button/>
       </div>
        </div>
    );
}

export default RegistrationMain;