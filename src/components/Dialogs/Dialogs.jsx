import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Mesage';

const Dialogs = (props) => {

  let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>);
  let messagesElements = props.state.messages.map(m => <Message message={m.message} key={m.id}/>);

  let newMessageElement = React.createRef();

  let newAddMessage = () => {
    let text = newMessageElement.current.value;
    console.log(text);
    alert(text);
    // debugger;
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
        <div>
          <textarea ref={newMessageElement}></textarea>
        </div>
        <div>
          <button onClick={newAddMessage}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;