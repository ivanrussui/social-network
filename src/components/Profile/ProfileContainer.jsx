import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileThunk, getStatusThunk, updateStatusThunk} from "../../redux/profileReducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";
// import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let profileId = this.props.router.params.userId;
        if (!profileId) {
            profileId = this.props.authorizedProfileId;
            if (!profileId) {
                this.props.history.push('/login');
            }
            // profileId = 25141 // мой id
            // profileId = 2  //  Димыча
        }

        // обращаемся к Thunk
        this.props.getProfileThunk(profileId);
        this.props.getStatusThunk(profileId); // не нужно если статус через ProfileStatusContainer
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}
                        status={this.props.status} updateStatus={this.props.updateStatusThunk}/>
        )
        // return <Profile {...this.props} profile={this.props.profile} />; // если статус через ProfileStatusContainer
    }
}

let mapStateToProps = (state) => ({ // когда функ возвр объект мы должны ставить обычные скобки ( ) а потом фигурные { }
    profile: state.profilePage.profile,
    status: state.profilePage.status,  // не нужно если статус через ProfileStatusContainer
    authorizedProfileId: state.auth.id,
    isAuth: state.auth.isAuth
})

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
// HOC
// let AuthRedirectComponent =  withAuthRedirect(ProfileContainer);

// export default connect(mapStateToProps, {getProfileThunk})(withRouter(AuthRedirectComponent));

export default compose(
    connect(mapStateToProps, {getProfileThunk, getStatusThunk, updateStatusThunk}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer);


