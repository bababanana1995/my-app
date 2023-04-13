import React from 'react'
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = "/Dialogs/" + props.id
    return (
        <div className={s.dialogs_content}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
const NameUsers = (props) => {
    let dialogsData = [
        {id: 1, name: 'Danil'},
        {id: 2, name: 'Dima'},
        {id: 3, name: 'Toma'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Jenya'},
        {id: 6, name: 'Petr'},
        {id: 7, name: 'Svytoslav'}
    ]
    let dialogsElement = dialogsData
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)


    return (
        <div className={s.name_users}>{dialogsElement}</div>
    )
}


export default NameUsers