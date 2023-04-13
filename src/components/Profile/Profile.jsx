import React from 'react'
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from "./Profile_info/Profile_info";

const Profile = () => {
    return (

        <div className={s.main_content}>
            <ProfileInfo/>
            <MyPosts/>

        </div>

    )
}
export default Profile