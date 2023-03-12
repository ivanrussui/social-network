import s from '../../ProfileInfo.module.css';

export const Contact = ({contactTitle, contactValue}) => {
    return (
        <div className={s.Contacts}>
            <b style={{color: 'indigo'}}>{contactTitle}: </b>
            <a href={`${contactValue}`} target={'_blank'} rel='noreferrer'>{contactValue}</a>
        </div>
    );
};