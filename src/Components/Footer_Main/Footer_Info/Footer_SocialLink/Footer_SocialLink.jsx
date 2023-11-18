import React from 'react';
import style from './Footer_SocialLink.module.css';
import Link_Text from './Link_Text/Link_Text';
import Link_Button from './Link_Button/Link_Button';


const Footer_SocialLink = (props) => {
    return(
      <div className={style.Footer_SocialLink}>
        <div className={style.Footer_SocialLink_Text}>
        <Link_Text text='Telegram'/>
        <Link_Text text='Vk'/>
        <Link_Text text='Reddit'/>
        </div>
        <div className={style.Footer_SocialLink_Button}>
        <Link_Button/>
        <Link_Button/>
        <Link_Button/>
        </div>
      </div>

    );
}

export default Footer_SocialLink;