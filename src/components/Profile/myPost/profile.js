import React from 'react'
import s from './profile.module.css'
import MyPost from './Post/MyPost'

const Profile = () => {
    return (

        <div className={s.main_content}>
            {/* <div className={s.position_i}>
                <img className={s.big_i} src="https://otrisovki.ru/wp-content/uploads/2021/04/9907.jpg"></img>
            </div> */}

            <div className={s.ava_text}>
                <div className={s.position_ava}>
                    <img className={s.ava} src='https://amiel.club/uploads/posts/2022-03/1647748258_34-amiel-club-p-multyashnie-kartinki-na-avatarku-35.jpg'></img>
                </div>
                <div className={s.position_text}>
                    <p className={s.text}>Name: Алиса Донаван</p>
                    <p className={s.text}>Age: 25 лет</p>
                    <p className={s.text}>City: Санкт-Петербург</p>
                    <p className={s.text}>About: Люблю вышивать крестиком и пить очень вкусное вино</p>
                </div>
            </div>
            <div className={s.position_posts}>
                <div className={s.post_h}><h1>My post</h1></div>
                {/* <div><input className={s.typ} type="text" ></input></div> */}
                <textarea className={s.pole_vvoda}></textarea>
                <button className={s.knopka}>Жмяк и всё</button>
                <MyPost />

            </div>
        </div>

    )
}
export default Profile