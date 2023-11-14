import React from 'react';
import style from './Footer_CompanyInfo.module.css';
import CompanyLogo from './CompanyLogo/CompanyLogo';
import CompanyWebsite from './CompanyWebsite/CompanyWebsite';


function Footer_CompanyInfo() {
    return(
      <div className={style.Footer_CompanyInfo}>
        <CompanyLogo/>
        <CompanyWebsite/>
      </div>

    );
}

export default Footer_CompanyInfo;