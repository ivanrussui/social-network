import React from 'react';
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {connect} from "react-redux";
import {getAuthLoginThunk, getAuthLogoutThunk} from "../../redux/authReducer";
import Login from "./Login";

class LoginContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthLoginThunk();
    }

    render() {
        return <Login {...this.props} />
    }
}


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    email: state.auth.email,
    password: state.auth.password
});
// wrapper to use react router's v6 hooks in class component(to use HOC pattern, like in router v5)
function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component {...props} router={{location, navigate, params}}/>
        );
    }

    return ComponentWithRouterProp;
}

export default connect(mapStateToProps, {getAuthLoginThunk})(withRouter(LoginContainer));
