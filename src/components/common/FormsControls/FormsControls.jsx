import { Field } from 'redux-form';
import styles from './FormsControls.module.css';

export const FormControl = ({input, meta, typeField, ...props}) => {
    const showError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + ' ' + (showError && styles.error)}>
            {typeField === 'textarea' && <textarea {...input} {...props} />}
            {typeField === 'input' && <input {...input} {...props} />}
            {showError && <span>{meta.error}</span>}
        </div>
    )
}

export const createField = (placeholder, name, component, typeField, validators = [], props = {}, text = '') => (
    <div style={{display: 'flex'}}>
        <Field placeholder={placeholder} name={name} component={component} typeField={typeField}
               validate={validators} {...props}/>{text}
    </div>
)

// export const Textarea = ({input, meta, ...props}) => {
//     const showError = meta.touched && meta.error;
//     return (
//         <div className={styles.formControl + ' ' + (showError && styles.error)}>
//             <textarea {...input} {...props} />
//             {showError && <span>{meta.error}</span>}
//         </div>
//     )
// }
//
// export const Input = ({input, meta, ...props}) => {
//     const showError = meta.touched && meta.error;
//     return (
//         <div className={styles.formControl + ' ' + (showError && styles.error)}>
//             <input {...input} {...props} />
//             {showError && <span>{meta.error}</span>}
//         </div>
//     )
// }

// const FormControl = ({input, meta, children}) => {
//     const showError = meta.touched && meta.error;
//     return (
//         <div className={styles.formControl + ' ' + (showError && styles.error)}>
//             <children.type {...input} {...children.props} />
//             {/*<textarea {...input} {...props} />*/}
//             {showError && <span>{meta.error}</span>}
//         </div>
//     )
// }
//
// export const Textarea = props => {
//     return<FormControl {...props}><textarea/></FormControl>
// }
// export const Input = props => {
//     return<FormControl {...props}><input/></FormControl>
// }

