import React from 'react';
import style from './Footer_SocialLink.module.css';
import Link_Text from './Link_Text/Link_Text';
import Link_Button from './Link_Button/Link_Button';
import { addLinkText, updateLinks } from '../../../../Redux/Links-reducer';
////////////////////////////////
const Footer_SocialLink = (props) => {
console.log(props);
////////////////////////////////////////////////////////////////
let LinksText = props.state.LinksReducer.SocialLinks.map( el => <Link_Text text={el.textlink} />);
let LinksLogo = props.state.LinksReducer.SocialLinks.map( el => <Link_Button link = {el.link} logo = {el.logo}/>);
////////////////////////////////
let newLinkElement = React.createRef();

let addLink = () => {
  let action = addLinkText();
  props.dispatch(action);
}

let onLinkTextChange= () => {
  let text = newLinkElement.current.value;
  let action = updateLinks(text);
  props.dispatch(action);
}
//////////////////////////////////////////////////////////////////
    return(
      <div className={style.Footer_SocialLink}>
        <div className={style.Footer_SocialLink_Text}>
        {LinksText}
        </div>
        <div className={style.Footer_SocialLink_Button}>
          {LinksLogo}
        </div>
        {/* убрать */}
        <textarea ref= {newLinkElement} value={props.state.LinksReducer.NewLinkText} onChange={onLinkTextChange}/>
        <button className={style.Button_AddLink} onClick={addLink}>Add Link</button>
      </div>

    );
}
/////////////////////////////////////////////////////////////////
export default Footer_SocialLink;