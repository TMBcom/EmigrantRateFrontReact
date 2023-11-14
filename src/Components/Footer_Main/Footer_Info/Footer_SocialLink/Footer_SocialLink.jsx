import React from 'react';
import style from './Footer_SocialLink.module.css';
import Link_Text from './Link_Text/Link_Text';
import Link_Button from './Link_Button/Link_Button';


function Footer_SocialLink() {
    return(
      <div className={style.Footer_SocialLink}>
        <Link_Text/>
        <Link_Button/>
      </div>

    );
}

export default Footer_SocialLink;