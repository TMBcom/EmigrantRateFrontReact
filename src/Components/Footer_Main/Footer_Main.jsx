import React from 'react';
import style from './Footer_Main.module.css';
import Footer_Info from './Footer_Info/Footer_Info';
import Footer_CompanyInfo from './Footer_CompanyInfo/Footer_CompanyInfo';


function Footer_Main() {
    return(
      <div class={style.Footer_Main}>
          <Footer_Info/>
          <Footer_CompanyInfo/>
    </div>

    );
}

export default Footer_Main;