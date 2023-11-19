import React from 'react';
import style from './Footer_Info.module.css';
import Footer_SocialLink from './Footer_SocialLink/Footer_SocialLink';
import Footer_Logo from './Footer_Logo/Footer_Logo';



const Footer_Info =(props) => {
    return(
      <div className={style.Footer_Info}>
        <div className={style.Footer_SocialLinks_Text}>
        <Footer_SocialLink SocialLinks={props.links}/>
        </div>
        <Footer_Logo/>
      </div>

    );
}

export default Footer_Info;