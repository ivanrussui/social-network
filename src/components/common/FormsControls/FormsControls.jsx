import styles from './FormsControls.module.css';

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

export const Textarea = ({input, meta, ...props}) => {
    const showError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + ' ' + (showError && styles.error)}>
            <textarea {...input} {...props} />
            {showError && <span>{meta.error}</span>}
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {
    const showError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + ' ' + (showError && styles.error)}>
            <input {...input} {...props} />
            {showError && <span>{meta.error}</span>}
        </div>
    )
}