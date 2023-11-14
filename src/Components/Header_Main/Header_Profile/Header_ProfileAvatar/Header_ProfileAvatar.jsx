import React from 'react';
import style from './Header_ProfileAvatar.module.css';
import ProfilePhoto from './icon/profile.svg'


function Header_ProfileAvatar() {
    return(
      <div class={style.Header_ProfileAvatar}>
       <img src={ProfilePhoto} alt="ProfPhoto" height="50"/>
    </div>

    );
}

export default Header_ProfileAvatar;