import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
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

const Login = () => {
    const onSubmit = (formData) => {
        console.log(formData)
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
