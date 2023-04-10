import React from 'react'
import s from './header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.Logo}><img src="https://i.pinimg.com/originals/e8/7a/fb/e87afb485ae35f89aceef01bc65ff1c0.png"></img></div>
            <div className={s.footertext}><p className={s.pText}>сразу после картинки очень длинный текст в целом я его могу писать прямо до
                конца строки даже не думал что это может занять столько символов е всё равно мало нужно ещё немножко</p>
            </div>
        </header>
    )
}
export default Header