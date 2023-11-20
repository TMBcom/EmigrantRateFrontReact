import React from 'react';
import style from './Profile_Avatar.module.css';
import emi from './emi_1.jpg'

function Profile_Avatar() {
    return(
       <div className={style.Profile}>
              <img className={style.ProfileAvatar} src={emi} alt="user" width="300"/>
              <div className={style.ProfileName}>ФИО</div>
              <div className={style.Status}>Статус</div>
              <div className={style.Rate}>Рейтинг</div>
          </div>

    );
}

export default Profile_Avatar;