import React from 'react';
import style from './CompanyWebsite.module.css';
import About_Button from './About_Button/About_Button';
import Contact_Button from './Contact_Button/Contact_Button';
import LatestNews_Button from './LatestNews_Button/LatestNews_Button';
import Portfolio_Button from './Portfolio_Button/Portfolio_Button';


function CompanyWebsite() {
    return(
      <div className={style.CompanyWebsite}>
        <About_Button/>
        <Contact_Button/>
        <LatestNews_Button/>
        <Portfolio_Button/> 
      </div>

    );
}

export default CompanyWebsite;