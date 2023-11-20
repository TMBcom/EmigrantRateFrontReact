import React from 'react';
import style from './Layout.module.css';
import {Outlet} from "react-router-dom";


function Layout() {
    return(
        <div class={style.Layout}>
            <Outlet />
      </div>
    );
}

export default Layout;