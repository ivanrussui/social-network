import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getProfileThunk} from "../../redux/profileReducer";
import {getAuthMeThunk} from "../../redux/authReducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";

class HeaderContainer extends React.Component {
    componentDidMount() {
        let profileId = this.props.router.params.userId;
        if (!profileId) {
            profileId = 25141 // мой id
            // profileId = 2  //  Димыча
        }

        // обращаемся к Thunk
        this.props.getAuthMeThunk();

        // обращаемся к Thunk
        this.props.getProfileThunk(profileId);
    }

    render() {
        // debugger
        // console.log(this.props)
        return <Header {...this.props} />
        // return <Header {...this.props} profile={this.props.profile}/>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    dialog1: state.dialogsPage.dialogs[0],
    id: state.auth.id,
    avatar: state.auth.avatar,
    profile: state.profilePage.profile
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


export default connect(mapStateToProps, {getProfileThunk, getAuthMeThunk})(withRouter(HeaderContainer));
