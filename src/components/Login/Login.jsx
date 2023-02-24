import { reduxForm } from "redux-form";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { getAuthLoginThunk } from "../../redux/authReducer";
import { createField, FormControl } from '../common/FormsControls/FormsControls';
import { minLengthCreator, required } from '../../utils/validators/validators';

import styles from '../common/FormsControls/FormsControls.module.css'

const minLength2 = minLengthCreator(2);
const minLength8 = minLengthCreator(8);


const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('Email', 'email', FormControl, 'input', [required, minLength2])}
            {createField('Password', 'password', FormControl, 'input', [required, minLength8], {type: 'password'})}
            {createField(null, 'rememberMe', FormControl, 'input', [], {type: 'checkbox'}, 'remember me')}
            {error && <span className={styles.formSummaryError}>{error}</span>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login',
})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.getAuthLoginThunk(formData.email, formData.password, formData.rememberMe);
    }
    if (props.isAuth) {
        return <Navigate to={'/profile'}/>
    }
    return (
        <>
            <h1 style={{color: 'indigo'}}>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </>
    )
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, {getAuthLoginThunk})(Login);
