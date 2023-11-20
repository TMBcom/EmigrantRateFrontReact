import React from 'react';
import style from './Profile_Main.module.css';
import emi from './emi_1.jpg'

function Profile_Main() {
    return(
      <div className={style.Profile_Main}>
<div className={style.wrapper}>
    <div className={style.left}>
        <img src={emi} alt="user" width="300"/>
        <h4>Джамшут</h4>
         <p>UI Developer</p>
    </div>
    <div className={style.right}>
        <div className={style.info}>
            <h3>Information</h3>
            <div className={style.info_data}>
                 <div className={style.data}>
                    <h4>Email</h4>
                    <p>alex@gmail.com</p>
                 </div>
                 <div className={style.data}>
                   <h4>Phone</h4>
                    <p>0001-213-998761</p>
              </div>
            </div>
        </div>
      
      <div className={style.projects}>
            <h3>Projects</h3>
            <div className={style.projects_data}>
                 <div className={style.data}>
                    <h4>Recent</h4>
                    <p>Lorem ipsum dolor sit amet.</p>
                 </div>
                 <div className={style.data}>
                   <h4>Most Viewed</h4>
                    <p>dolor sit amet.</p>
              </div>
            </div>
        </div>
      
        <div className={style.social_media}>
            <ul>
              <li><a href="#"><i className={style.fab_fa_facebook_f}></i></a></li>
              <li><a href="#"><i className={style.fab_fa_facebook_f}></i></a></li>
              <li><a href="#"><i className={style.fab_fa_facebook_f}></i></a></li>
          </ul>
      </div>
    </div>
</div>
      </div>

    );
}

export default Profile_Main;