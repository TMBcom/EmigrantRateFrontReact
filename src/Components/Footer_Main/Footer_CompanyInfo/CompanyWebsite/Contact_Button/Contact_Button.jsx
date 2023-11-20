import React from 'react';
import style from './Contact_Button.module.css';
import { Link } from 'react-router-dom';

function Contact_Button() {
    return(
      <div className={style.Contact_Button}>
          <Link to='https://vk.com/tmb_command'>Контакты</Link>
      </div>

    );
}

export default Contact_Button;