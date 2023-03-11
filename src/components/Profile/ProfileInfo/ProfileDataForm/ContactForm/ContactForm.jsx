import { createField, FormControl } from '../../../../common/FormsControls/FormsControls';

export const ContactForm = ({contactTitle, contactValue}) => {
    return <><b>{contactTitle}:</b>{createField(contactTitle, contactValue, FormControl, 'input')}</>;
};