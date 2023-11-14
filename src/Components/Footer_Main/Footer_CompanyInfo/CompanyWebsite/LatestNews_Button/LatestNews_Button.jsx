import React from 'react';
import style from './LatestNews_Button.module.css';
import { Link } from 'react-router-dom';

function LatestNews_Button() {
    return(
      <div className={style.LatestNews_Button}>
         <Link to='https://vk.com/tmb_command'>Последние новости</Link>
      </div>

    );
}

export default LatestNews_Button;