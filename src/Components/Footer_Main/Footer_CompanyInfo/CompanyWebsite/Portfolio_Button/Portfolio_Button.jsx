import React from 'react';
import style from './Portfolio_Button.module.css';
import { Link } from 'react-router-dom';

function Portfolio_Button() {
    return(
      <div className={style.Portfolio_Button}>
        <Link to='https://vk.com/tmb_command'>Портфолио</Link>
      </div>

    );
}

export default Portfolio_Button;