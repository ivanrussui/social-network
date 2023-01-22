import {Field, reduxForm} from "redux-form";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
import {getAuthLoginThunk} from "../../redux/authReducer";

const LoginForm = (props) => {
// debugger
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'} name={'email'} component={'input'}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={'input'}/>
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={'input'}/>remember me
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
        props.getAuthLoginThunk(formData.email, formData.password);
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
