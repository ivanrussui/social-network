const LoginForm = () => {
    return (
        <form>
            <div>
                <input placeholder={'Login'}/>
            </div>
            <div>
                <input placeholder={'Password'}/>
            </div>
            <div>
                <input type={'checkbox'}/>remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const Login = () => {
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
            <LoginForm/>
        </>
    )
    // return <h1 style={{paddingLeft: '10px', color: 'indigo'}}>LOGIN</h1>
}


export default Login;
