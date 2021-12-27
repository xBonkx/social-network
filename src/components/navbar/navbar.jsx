import React from 'react';
import s from './navbar.module.css';
import {NavLink} from "react-router-dom";


const Nav = () => {
    return (
        <nav className={s.nav}>

            <div className={s.item}><NavLink to="/profile" className = { navData => navData.isActive ? s.active : s.item }>меню 1</NavLink></div>
            <div className={s.item}><NavLink to="/dialogs" className = { navData => navData.isActive ? s.active : s.item }>меню 2</NavLink></div>
            <div className={s.item}><NavLink to="/menu3" className = { navData => navData.isActive ? s.active : s.item }>меню 3</NavLink></div>
            <div className={s.item}><NavLink to="/idle" className = { navData => navData.isActive ? s.active : s.item }>idle игра тестовая</NavLink></div>
        </nav>
    );
}


export default Nav;