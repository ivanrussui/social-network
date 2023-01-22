import {Field, reduxForm} from "redux-form";

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
        console.log(formData.email, formData.password);
        console.log(formData)
    }
    return (
        <>
            <h1 style={{ color: 'indigo' }}>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
            {/*<button onClick={props.getAuthLogoutThunk}>Logout</button>*/}
        </>
    )
}


export default Login;
