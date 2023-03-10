import { Contact } from './Contact/Contact';
import s from '../ProfileInfo.module.css';
import { reduxForm } from 'redux-form';
import { createField, FormControl } from '../../../common/FormsControls/FormsControls';
import { minLengthCreator, required } from '../../../../utils/validators/validators';

const minLength2 = minLengthCreator(2);
const minLength5 = minLengthCreator(5);

const ProfileDataForm = ({profile, handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <button>Сохранить</button>
            <div>
                <b style={{color: 'indigo', textDecoration: 'underline', fontSize: '20px'}}>Обо мне</b>
                {createField('Обо мне', 'aboutMe', FormControl, 'textarea', [required, minLength5])}
            </div>
            {/*<div>*/}
                {/*<b>Контакты:</b> {Object.keys(profile.contacts).map(key => {*/}
                {/*return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>*/}
            {/*})}*/}
            {/*</div>*/}

            <div className={s.status}><b>Статус работы: </b>
                {createField('', 'lookingForAJob', FormControl, 'input', [], {type: 'checkbox'}, 'В поиске работы')}
            </div>
            <div><b>Мои профессиональные навыки:</b>
                {createField('Мои профессиональные навыки', 'lookingForAJobDescription', FormControl,
                'textarea', [required, minLength5])}
            </div>
            <div><b>Полное имя:</b>
                {createField('Полное имя', 'fullName', FormControl, 'input', [required, minLength2])}
            </div>
        </form>
    );
};

const ProfileDataReduxForm = reduxForm({form: 'profile'})(ProfileDataForm);

export default ProfileDataReduxForm;