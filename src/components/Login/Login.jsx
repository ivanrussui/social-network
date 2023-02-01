import {Field, reduxForm} from "redux-form";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
import {getAuthLoginThunk} from "../../redux/authReducer";
import { FormControl } from '../common/FormsControls/FormsControls';
import { minLengthCreator, required } from '../../utils/validators/validators';

const minLength2 = minLengthCreator(2);
const minLength8 = minLengthCreator(8);


const LoginForm = (props) => {
// debugger
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'} name={'email'} component={FormControl} typeField={'input'}
                       validate={[required, minLength2]}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={FormControl} typeField={'input'}
                       validate={[required, minLength8]}/>
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={FormControl} typeField={'input'}
                       validate={[required]}/>remember me
            </div>
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
        return <Navigate to={'/profile'} />
    }
    return (
        <>
            <h1 style={{ color: 'indigo' }}>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </>
    )
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})


export default connect (mapStateToProps, {getAuthLoginThunk})(Login);
