import React from 'react';
import style from './Employer_Catalog.module.css';
import Emp from './emp_1.jpg';
import { Link } from'react-router-dom';

function Employer_Catalog() {
    return(
      <div className={style.Employer_Catalog}>
       <Link to='/Profile' className={style.linkContainer}>
<div className={style.Emigrant_Card_container}>
<div className={style.center}>

  <div className={style.card}>
    <div className={style.additional}>
      <div className={style.user_card}>


      <img src={Emp} alt="EmpAvatar" width={90} className={style.emigrant_Avatar}/>
        <div className={style.emiName}>ФИО</div>
        <div className={style.status}>Статус</div>
        <div className={style.rate}>Рейтинг</div>

      </div>
      <div className={style.more_info}>
        <h1>О себе</h1>
        <div className={style.description}>Описание</div>
      </div>
    </div>
    <div className={style.general}>
      <div className={style.nameInfo}>Имя</div>
      <div className={style.nameInfo}>id номер</div>
      <div className={style.nameInfo}>Рейтинг</div>
      <div className={style.nameInfo}>Статус</div>
      <div className={style.nameInfo}>Возраст</div>
      <div className={style.nameInfo}>Опыт работы</div>

      <div className={style.more}> Наведитесь на меня </div>
    </div>
  </div>
  </div>
      </div>
      </Link>
      </div>

    );
}

export default Employer_Catalog;