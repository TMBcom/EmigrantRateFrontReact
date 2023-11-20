import React from 'react';
import style from './EmployersPage_Main.module.css';


function EmployersPage_Main() {
    return(
      <div className={style.EmployersPage_container}>
      <div className={style.EmployersPage_Main}>
      <form className={style.form} onsubmit="event.preventDefault();" role="search">
  <label className={style.label} for="search">Search for stuff</label>
  <input className={style.input} id="search" type="search" placeholder="поиск эмигрантов" autofocus required />
  <button className={style.button} type="submit">Поиск</button>    
</form>
      </div>
</div>
    );
}

export default EmployersPage_Main;