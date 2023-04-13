import React from 'react'
import s from './Dialogs.module.css'
import NameUsers from "./DialogsName/DialogsName";
import Messages from "./DialogsMeesage/DialogsMessage";





const Dialogs = (props) => {

    return (
        <div className={s.dialogs}>
            <NameUsers/>
            <Messages/>

        </div>

    )
}

export default Dialogs