import { createField, FormControl } from '../../../../common/FormsControls/FormsControls';
import s from '../../ProfileInfo.module.css';

export const ContactForm = ({contactTitle, contactValue}) => {
    return (
        <div className={s.Contacts}><b style={{color: 'indigo'}}>{contactTitle}:</b>
            {createField(contactTitle, contactValue, FormControl, 'input')}
        </div>
    );
};
