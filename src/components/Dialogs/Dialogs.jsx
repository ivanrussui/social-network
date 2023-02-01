import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Mesage';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../utils/validators/validators';
import { FormControl } from '../common/FormsControls/FormsControls';

const maxLength50 = maxLengthCreator(50);

const DialogForm = (props) => {
  return (
      <form onSubmit={props.handleSubmit}>
          <div>
              <Field component={FormControl} typeField={'textarea'} name={'newMessageBody'}
                     validate={[required, maxLength50]} placeholder={'Enter your message'} />
          </div>
          <div>
              <button>SEND</button>
          </div>
      </form>
  )
}

const DialogReduxForm = reduxForm({form: 'dialog'})(DialogForm);

const Dialogs = (props) => {

    // debugger;
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.name}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message} id={m.id} key={m.message}/>);
    // let newMessageBody = state.newMessageBody;

    // let onSendMessageClick = () => {  // отправка сообщения
    //     props.sendMessage();
    // };

    // if (!props.isAuth) return <Navigate to={'/login'} />;

    const addNewMessage = (message) => {
        props.sendMessage(message.newMessageBody);

    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <DialogReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>
    );
};

export default Dialogs;