import React from 'react';

function Header() {
    return(
      <div className="Header_Block">

      <div className='Logo_Emigrant'>
        <a href='#'>EmigrantRate</a>
      </div>

      <div className='Navigation_header'>
        
      <div className='Search_work'>
        <a href='#'>Поиск вакансий</a>
      </div>

      <div className='Find_Emigrant'>
        <a href='#'>Поик Эмигрантов</a>
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

    );
}

export default Header;