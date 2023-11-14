import React from 'react';
import style from './Footer_Info.module.css';
import Footer_SocialLink from './Footer_SocialLink/Footer_SocialLink';
import Footer_Logo from './Footer_Logo/Footer_Logo';


function Footer_Info() {
    return(
      <div className={style.Footer_Info}>
        <div className={style.Footer_SocialLinks}>
        <Footer_SocialLink/>
        <Footer_SocialLink/>
        <Footer_SocialLink/>
        </div>
        <Footer_Logo/>
      </div>

    );
}

export default Footer_Info;