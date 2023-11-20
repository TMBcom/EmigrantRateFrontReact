import React from 'react';
import style from './Profile_Main.module.css';
import Profile_Avatar from './Profile_Avatar/Profile_Avatar';
import Profile_Info from './Profile_Info/Profile_Info';
import Profile_Reviews from './Profile_Reviews/Profile_Reviews';

function Profile_Main() {
    return(
      <div className={style.Profile_Main}>
      <div className={style.wrapper}>
        <Profile_Avatar/>
        <Profile_Info/>   
      </div>
      <div className={style.commentsContainer}>
      <div className={style.commentsMain}>
        <Profile_Reviews/>

      </div>
      </div>
      </div>

    );
}

export default Profile_Main;