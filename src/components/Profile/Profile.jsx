import React from 'react'
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
    return (

        <div className={s.main_content}>
            {/* <div className={s.position_i}>
                <img className={s.big_i} src="https://otrisovki.ru/wp-content/uploads/2021/04/9907.jpg"></img>
            </div> */}

            <div className={s.ava_text}>
                <div className={s.position_ava}>
                    <img className={s.ava}
                         src='https://amiel.club/uploads/posts/2022-03/1647748258_34-amiel-club-p-multyashnie-kartinki-na-avatarku-35.jpg'></img>
                </div>
                <div className={s.position_text}>
                    <p className={s.text}>Name: Алиса Донаван</p>
                    <p className={s.text}>Age: 25 лет</p>
                    <p className={s.text}>City: Санкт-Петербург</p>
                    <p className={s.text}>About: Люблю вышивать крестиком и пить очень вкусное вино</p>
                </div>
            </div>
                <MyPosts/>

        </div>

    )
}
export default Profile