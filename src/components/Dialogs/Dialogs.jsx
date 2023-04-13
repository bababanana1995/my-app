import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogsName/DialogsName";
import Message from "./DialogsMeesage/DialogsMessage";


let dialogsData = [
    {id: 1, name: 'Danil'},
    {id: 2, name: 'Dima'},
    {id: 3, name: 'Toma'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Jenya'},
    {id: 6, name: 'Petr'},
    {id: 7, name: 'Svytoslav'}
]
let messageData = [
    {id: 1, message: 'hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'All right'},
    {id: 4, message: 'May be see'},
    {id: 5, message: 'By by'},
]
let messageElement = messageData
    .map(message => <Message message={message.message}/>)
const Messages = (props) => {

    return (
        <div className={s.messages}>
            {messageElement}

        </div>
    )
}
let dialogsElement = dialogsData
    .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)

const NameUsers = (props) => {
    return (
        <div className={s.name_users}>
            {dialogsElement}

        </div>
    )
}

const Dialogs = (props) => {

    return (
        <div className={s.dialogs}>
            <NameUsers/>
            <Messages/>

        </div>

    )
}

export default Dialogs