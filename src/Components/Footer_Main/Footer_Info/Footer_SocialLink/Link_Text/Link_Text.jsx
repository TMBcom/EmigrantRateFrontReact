import React from 'react';
import style from './Link_Text.module.css';


const Link_Text = (props) => {
    return(
      <div className={style.Link_Text}>
        {props.text}
      </div>

    );
}

export default Link_Text;