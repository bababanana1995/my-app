import React from 'react'
import s from './../Dialogs.module.css'

const Message = (props) => {

    return (
        <div className={s.message}>{props.message}</div>
    )
}
const Messages = (props) => {
    let messageData = [
        {id: 1, message: 'hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'All right'},
        {id: 4, message: 'May be see'},
        {id: 5, message: 'By by'},
    ]
    let messageElement = messageData
        .map(message => <Message message={message.message}/>)

    return (
        <div className={s.messages}>
            {messageElement}

        </div>
    )
}

export default Messages