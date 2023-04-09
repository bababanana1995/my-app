import React from 'react'
import s from './profile.module.css'

const Profile = () => {
    return (
        <div className={s.main_content}>
            <div>
            <img src="https://otrisovki.ru/wp-content/uploads/2021/04/9907.jpg"></img>
            </div>
            <div>ava + description</div>
            <div>my post</div>
            <div>
                <div>Post1</div>
                <div>Post 2</div>
            </div>
        </div>
    )
}
export default Profile