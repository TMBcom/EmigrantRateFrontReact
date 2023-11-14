import React from 'react';
import style from './Footer_Logo.module.css';
import Link_Logo from './Link_Logo/Link_Logo';
import Footer_WebsiteInfoShort from './Footer_WebsiteInfoShort/Footer_WebsiteInfoShort';


function Footer_Logo() {
    return(
      <div className={style.Footer_Logo}>
        <Link_Logo />
        <Footer_WebsiteInfoShort />
      </div>

    );
}

export default Footer_Logo;