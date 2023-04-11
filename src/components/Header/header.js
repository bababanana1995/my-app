import React from 'react'
import s from './header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.header_menu}>
                <div><a className={s.header_a} src='#'>главная</a></div>
                <div><a className={s.header_a} src='#'>Поиск друзей</a></div>
                <div><a className={s.header_a} src='#'>ещё что-то</a></div>
                <div><a className={s.header_a} src='#'>и ещё что-то</a></div>
            </div>
            <div className={s.Logo}><img src="https://i.pinimg.com/originals/e8/7a/fb/e87afb485ae35f89aceef01bc65ff1c0.png"></img></div>
        </header>
    )
}
export default Header