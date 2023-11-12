import React from 'react';
import Header_Logo from './Header_Logo/Header_Logo';
import Header_EmigrantPage from './Header_Body/Header_EmigrantPage/Header_EmigrantPage';
import Header_EmployerPage from './Header_Body/Header_EmployerPage/Header_EmployerPage';
import style from './Header_Main.module.css';


function Header() {
    return(
      <div className="Header_Main">
        <div className={style.Header_Main}>

          <div className='Header_Logo'>
            <Header_Logo/>
          </div>
          
          <div className='Header_Body'>
          
            <div className={style.Header_Body}>
                
                <div className={style.Header_Main}>
                  <Header_EmigrantPage/>
                </div>

                <div className={style.Header_EmployerPage}>
                  <Header_EmployerPage/>
                </div>

            </div>
          </div>

          <div className='AutoRegPosition'>

          <div className='Registration'>
            <a href='#'>Зарегистрироваться</a>
          </div>

          <div className='Authorization'>
            <a href='#'>Войти</a>
          </div>

          </div>

        </div>
      </div>

    );
}

export default Header;