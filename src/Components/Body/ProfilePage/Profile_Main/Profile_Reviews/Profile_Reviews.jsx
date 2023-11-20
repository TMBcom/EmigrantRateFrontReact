import React from 'react';
import style from './Profile_Reviews.module.css';


function Profile_Reviews() {
    return(
      <div className={style.fb_form}>
      <form action='#' className={style.form_group}>
      <h2>Что вы думаете о работнике?</h2>
      <div className={style.input_review}>
      <input className={style.form_control} placeholder='Ваше имя' type='text'/>
      <input className={style.form_control} placeholder='Email' type='text'/>
      </div>
      <textarea className={style.form_control} name='review' placeholder='Напишите что вы думаете' rows="10" cols="45"></textarea>
      <input className={style.btn_primary} type='submit'/>
      </form>
          </div>

    );
}

export default Profile_Reviews;