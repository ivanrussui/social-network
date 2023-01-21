import {Field, reduxForm} from "redux-form";
import {getAuthLoginThunk, setAuthUserLogin} from "../../redux/authReducer";

const LoginForm = (props) => {
// debugger
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={'login'} component={'input'}/>
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
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.getAuthLoginThunk(formData.login, formData.password);
        console.log(formData.login, formData.password);
        console.log(formData)
        // props.setAuthUserLogin(formData);
        // props.getAuthLoginThunk(formData);
        // props.isAuth = true;
        // console.log(formData.password)
        // login: formData.login;
        // password: formData.password;
        // debugger

        // props.
    }
    return (
        <>
            <a style={{
                display: 'inline-block',
                fontSize: '2em',
                margin: '0.67em',
                fontWeight: 'bold',
                textDecoration: 'none'
            }}
               target={'_blank'} href={'https://social-network.samuraijs.com/'}>LOGIN</a>
            <LoginReduxForm onSubmit={onSubmit}/>
        </>
    )
    // return <h1 style={{paddingLeft: '10px', color: 'indigo'}}>LOGIN</h1>
}


export default Login;
