import { Contact } from './Contact/Contact';
import s from '../ProfileInfo.module.css';
import { reduxForm } from 'redux-form';
import { createField, FormControl } from '../../../common/FormsControls/FormsControls';
import { minLengthCreator, required } from '../../../../utils/validators/validators';

const minLength2 = minLengthCreator(2);
const minLength5 = minLengthCreator(5);

const ProfileDataForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <button>Сохранить</button>
            <div>
                <b style={{color: 'indigo', textDecoration: 'underline', fontSize: '20px'}}>Обо мне</b>
                {createField('Обо мне', 'обо мне', FormControl, 'textarea', [required, minLength5])}
            </div>
            <div>
                {/*<b>Контакты:</b> {Object.keys(profile.contacts).map(key => {*/}
                {/*return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>*/}
            {/*})}*/}
            </div>

            <div className={s.status}><b>Статус работы: </b>
                {createField('', 'Статус работы', FormControl, 'input', [], {type: 'checkbox'}, 'В поиске работы')}
            </div>
            <div><b>Мои профессиональные навыки:</b>
                {createField('Мои профессиональные навыки', 'мои профессиональные навыки', FormControl,
                'textarea', [required, minLength5])}
            </div>
            <div><b>Полное имя:</b>
                {createField('Полное имя', 'полное имя', FormControl, 'input', [required, minLength2])}
            </div>
        </form>
    );
};

const ProfileDataReduxForm = reduxForm({form: 'profile'})(ProfileDataForm);

export default ProfileDataReduxForm;