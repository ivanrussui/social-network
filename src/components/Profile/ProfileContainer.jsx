import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileThunk, getStatusThunk, updateStatusThunk} from "../../redux/profileReducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";
// import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        // debugger;
        let profileId = this.props.router.params.userId;
        if (!profileId) {
            profileId = 2
        }

        // обращаемся к Thunk
        this.props.getProfileThunk(profileId);
        this.props.getStatusThunk(profileId);
    }

    render() {
        // debugger;
        // console.log(this.props.updateStatus)

        return <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatusThunk}/>;
    }
}

let mapStateToProps = (state) => ({ // когда функ возвр объект мы должны ставить обычные скобки ( ) а потом фигурные { }
    profile: state.profilePage.profile,
    status: state.profilePage.status
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


