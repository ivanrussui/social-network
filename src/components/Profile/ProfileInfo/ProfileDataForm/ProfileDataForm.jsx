import s from '../ProfileInfo.module.css';
import { reduxForm } from 'redux-form';
import { createField, FormControl } from '../../../common/FormsControls/FormsControls';
import { minLengthCreator, required } from '../../../../utils/validators/validators';
import { ContactForm } from './ContactForm/ContactForm';
import styles from '../../../common/FormsControls/FormsControls.module.css';

const minLength2 = minLengthCreator(2);
const minLength5 = minLengthCreator(5);

const ProfileDataForm = ({profile, handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div><button>Save</button></div>
            {error && <span className={styles.formSummaryError}>{error}</span>}
            <div className={s.status}><b className={s.bold}>Looking For A Job: </b>
                {createField('', 'lookingForAJob', FormControl, 'input', [], {type: 'checkbox'})}
            </div>
            <div><b className={s.bold}>Full Name:</b>
                {createField('Full Name', 'fullName', FormControl, 'input', [required, minLength2])}
            </div>
            <div>
                <b className={s.bold}>About Me:</b>
                {createField('About Me', 'aboutMe', FormControl, 'textarea', [required, minLength5])}
            </div>
            <div><b className={s.bold}>My Skills:</b>
                {createField('My Skills', 'lookingForAJobDescription', FormControl,
                    'textarea', [required, minLength5])}
            </div>
            <div>
                <b className={s.bold}>Contacts:</b>
                <br/>
                {Object.keys(profile.contacts).map(key => {
                    return (
                        <ContactForm key={key} contactTitle={key} contactValue={`contacts.${key}`.toLocaleLowerCase()} />
                    // <div key={key}>
                    //     <b>{key}:</b> {createField(key, 'contacts.' + key.toLocaleLowerCase(), FormControl, 'input')}
                    //     {/*<b>{key}:</b> {createField(key, `contacts.${key}`, FormControl, 'input')}*/}
                    // </div>
                    )
                })}
            </div>
        </form>
    );
};

const ProfileDataReduxForm = reduxForm({form: 'profile'})(ProfileDataForm);

export default ProfileDataReduxForm;