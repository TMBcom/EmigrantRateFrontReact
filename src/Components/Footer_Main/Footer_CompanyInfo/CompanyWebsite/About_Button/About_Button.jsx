import React from 'react';
import style from './About_Button.module.css';
import { Link } from 'react-router-dom';


function About_Button() {
    return(
      <div className={style.About_Button}>
       <Link to='https://vk.com/tmb_command'>О нас</Link>
      </div>

    );
}

export default About_Button;