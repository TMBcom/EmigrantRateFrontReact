import React from 'react';
import style from './Profile_Info.module.css';


function Profile_Info() {
    return(
            <div className={style.MainInfo}>
              <div className={style.info}>
                  <div className={style.infoTitle}>Основная информация</div>
                  <div className={style.info_data}>
                  <div className={style.info_data_title}>
                  <b className={style.b}>ID лицензии:</b>
                  <b className={style.b}>ФИО:</b>
                  <b className={style.b}>Статус:</b>
                  <b className={style.b}>Рейтинг:</b>
                  <b className={style.b}>Пол:</b>
                  <b className={style.b}>Страна:</b>
                  <b className={style.b}>Опыт работы:</b>
                  <b className={style.b}>Кол-во отзывов:</b>
                  </div>
                  <div className={style.info_data_data}>
                  <div className={style.data}>1234567890123</div>
                  <div className={style.data}>Фамилия Имя Отчество</div>
                  <div className={style.data}>Статус</div>
                  <div className={style.data}>9 из 10</div>
                  <div className={style.data}>Мужской</div>
                  <div className={style.data}>Таджикистан</div>
                  <div className={style.data}>0</div>
                  <div className={style.data}>100</div>
                  </div>
                  </div>
              </div>
          </div>

    );
}

export default Profile_Info;