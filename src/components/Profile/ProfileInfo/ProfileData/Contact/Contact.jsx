import s from '../../ProfileInfo.module.css';

export const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.Contacts}><b>{contactTitle}</b>: {contactValue}</div>
};