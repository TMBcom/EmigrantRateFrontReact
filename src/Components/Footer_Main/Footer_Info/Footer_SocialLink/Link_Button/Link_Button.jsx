import React from 'react';
import style from './Link_Button.module.css';
import { Link } from 'react-router-dom';
import VKLogo from './icon/VKLogo.svg';


function Link_Button(props) {
    return(
      <div className={style.Link_Button}>
       <Link to={props.link} > <img src={VKLogo} alt="VKLogo" width={25}/>
       </Link>
      </div>

    );
}

export default Link_Button;