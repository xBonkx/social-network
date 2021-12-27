import React from 'react';
import classes from './dialogs.module.css';
import {Message} from "./message/message.jsx";
import {Contact} from "./contact/contact.jsx";


export const Dialogs = (props) => {
    let Contacts = props.contactData.map ( el => <Contact name={el.name} id={el.id}/>);
    let Messages = props.textData.map ( el => <Message text={el.text}/>);
    let textmessage = React.createRef();
    const addMessage = 1;
    return (
        <div className={classes.content}>
            <div className={classes.item}>
                {Contacts}
            </div>
            <div className={classes.message}>
                {Messages}
                <textarea ref={textmessage}></textarea>
                <div><button onClick={addMessage}>Отправить сообщение</button></div>
            </div>
        </div>
    );
}


