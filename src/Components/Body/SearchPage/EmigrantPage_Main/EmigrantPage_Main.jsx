import React from 'react';
import style from './EmigrantPage_Main.module.css';
import Employer_Catalog from './Employer_Catalog/Employer_Catalog';

function EmigrantPage_Main() {
    return(
      <div className={style.EmigrantPage_container}>
      <div className={style.EmigrantPage_Main}>
      <form className={style.form} onsubmit="event.preventDefault();" role="search">
  <label className={style.label} for="search">Search for stuff</label>
  <input className={style.input} id="search" type="search" placeholder="поиск работодателей" autofocus required />
  <button className={style.button} type="submit">Поиск</button>    
</form>
      </div>
      <Employer_Catalog/>
      <Employer_Catalog/>
      <Employer_Catalog/>
</div>
    );
}

export default EmigrantPage_Main;