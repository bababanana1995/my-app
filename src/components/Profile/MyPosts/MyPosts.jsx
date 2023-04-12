import React from 'react'
import s from './MyPosts.module.css'
import Post from './MyPost/Post'

const MyPosts = () => {
    return (
        <div>
        <div className={s.position_posts}>
            <div className={s.post_h}><h1>My post</h1></div>
            <textarea className={s.pole_vvoda}></textarea>
            <button className={s.knopka}>Жмяк и всё</button>
        </div>
        <Post name='Dima' message='i am here' like='10'/>
        <Post name='Danya' message='i am not here' like='50'/>
        <Post name='Toma' message='i am been here' like='20'/>

        </div>

)
}
export default MyPosts