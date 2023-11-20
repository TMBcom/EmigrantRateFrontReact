import React from 'react';
import style from './EmployersPage_Main.module.css';
import Emigrant_Catalog from './Emigrant_Catalog/Emigrant_Catalog';

function EmployersPage_Main() {
    return(
      <div className={style.EmployersPage_container}>
      <div className={style.EmployersPage_Main}>
      <form className={style.form} onsubmit="event.preventDefault();" role="search">
  <label className={style.label} for="search">Search for stuff</label>
  <input className={style.input} type="search" placeholder="поиск эмигрантов" />
  <button className={style.button} type="submit">Поиск</button>    
</form>
</div>
<Emigrant_Catalog/>
<Emigrant_Catalog/>
<Emigrant_Catalog/>
</div>


    );
}

export default EmployersPage_Main;