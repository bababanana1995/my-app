import React from 'react'
import s from './MyPost.module.css'

const MyPost = () => {
    return (

                <div>
                    <div className={s.post}>
                        <div ><img className={s.ava_krug} src='https://amiel.club/uploads/posts/2022-03/1647748258_34-amiel-club-p-multyashnie-kartinki-na-avatarku-35.jpg'></img></div>
                        <div className={s.post_text}><p>Мой второй пост это так здорово!</p></div>
                    </div>
                    <div className={s.post}>
                        <div ><img className={s.ava_krug} src='https://amiel.club/uploads/posts/2022-03/1647748258_34-amiel-club-p-multyashnie-kartinki-na-avatarku-35.jpg'></img></div>
                        <div className={s.post_text}><p>Это мой самый первый пост, что же дальше?!</p></div>
                    </div>

                </div>
          


    

    )
}
export default MyPost