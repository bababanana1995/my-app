import React from 'react';
import s from './Navigation.module.css'
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <nav className={s.Nav}>
            <div className={s.item}><NavLink className={NavDate => NavDate.isActive? s.active : s.item} to="/Profile">Profile</NavLink></div>
            <div className={s.item}><NavLink className={NavDate => NavDate.isActive? s.active : s.item} to="/Dialogs">Dialogs</NavLink></div>
            <div className={s.item}><NavLink className={NavDate => NavDate.isActive? s.active : s.item} to="/News">News</NavLink></div>
            <div className={s.item}><NavLink className={NavDate => NavDate.isActive? s.active : s.item} to="/Music">Music</NavLink></div>

            <div className={s.item}><NavLink className={NavDate => NavDate.isActive? s.active : s.item} to="/Settings">Settings</NavLink></div>
        </nav>
    )
}
export default Navigation