import React from 'react';
import style from './Footer_SocialLink.module.css';
import Link_Text from './Link_Text/Link_Text';
import Link_Button from './Link_Button/Link_Button';




const Footer_SocialLink = (props) => {
let LinksText = props.SocialLinks.map( el => <Link_Text text={el.textlink} />);
let LinksLogo = props.SocialLinks.map( el => <Link_Button link = {el.link} logo = {el.logo}/>);
    return(
      <div className={style.Footer_SocialLink}>
        <div className={style.Footer_SocialLink_Text}>
        {LinksText}
        </div>
        <div className={style.Footer_SocialLink_Button}>
          {LinksLogo}
        </div>
      </div>

    );
}

export default Footer_SocialLink;