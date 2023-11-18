import React from 'react';
import style from './CompanyLogo.module.css';
import Compani_logo from './icon/TMB_Logo-opt.svg'
import {Link} from'react-router-dom';

function CompanyLogo() {
    return(
      <div className={style.CompanyLogo}>
        <Link to='https://vk.com/tmb_command' className='Link_Style'>
      <img src={Compani_logo} alt="TMB_Logo" height="50"/>
      </Link>
      <div>
      TwoMenBand studio
      </div>
      </div>

    );
}

export default CompanyLogo;