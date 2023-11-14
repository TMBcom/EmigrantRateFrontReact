import React from 'react';
import style from './Header_Profile.module.css';
import Header_ProfileAvatar from './Header_ProfileAvatar/Header_ProfileAvatar';
import Header_ProfileText from './Header_ProfileText/Header_ProfileText';


function Header_Profile() {
    return(
      <div class={style.Header_Profile}>
        <Header_ProfileAvatar/>
        <Header_ProfileText/>
    </div>

    );
}

export default Header_Profile;