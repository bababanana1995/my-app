import React from 'react';
import s from './navigation.module.css'

const Navigation = () => {
    return (
        <nav className={s.Nav}>
            <div><a className={s.item} href="#">Profile</a></div>
            <div><a className={`${s.item} ${s.active}`} href="#">Message</a></div>
            <div><a className={s.item} href="#">News</a></div>
            <div><a className={s.item} href="#">Music</a></div>

            <div><a className={s.item} href="#">Settings</a></div>
        </nav>
    )
}
export default Navigation