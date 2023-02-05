import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileThunk, getStatusThunk, updateStatusThunk} from "../../redux/profileReducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {compose} from "redux";
import {Navigate} from "react-router-dom";

class ProfileContainer extends React.Component {
    constructor(props) {
        super( props );
        this.state = {
            isShowMyProfile: true
        }
    }

    componentDidMount() {
        // let profileId = this.props.router.params.userId;
        let profileId = this.props.router.params.userId;
        let authorisedProfileId = this.props.authorizedProfileId;
        // debugger
        // if (!profileId) {
        //     profileId = this.props.authorizedProfileId;
        //     // profileId = 25141 // мой id
        //     // profileId = 2  //  Димыча
        // }

        if (profileId) {

            this.props.getProfileThunk( profileId );
            this.props.getStatusThunk( profileId );

        } else {
            if (this.props.isAuth) {
                this.props.getProfileThunk( authorisedProfileId );
                this.props.getStatusThunk( authorisedProfileId );
            }
        }
        // // обращаемся к Thunk
        // this.props.getProfileThunk(profileId);
        // this.props.getStatusThunk(profileId); // не нужно если статус через ProfileStatusContainer

    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        let profileId = +this.props.router.params.userId;
        let authorisedProfileId = this.props.authorizedProfileId;
        let isShowMyProfile = this.state.isShowMyProfile;

        if (isShowMyProfile) {

            if (profileId === authorisedProfileId) {
                this.setState( {isShowMyProfile: false} )
            }

            if (!profileId && this.props.isAuth) {
                this.props.getProfileThunk( authorisedProfileId );
                this.props.getStatusThunk( authorisedProfileId );
                this.setState( {isShowMyProfile: false} )
            }
        }
    }

    render() {
        if (!this.props.isAuth && !this.props.router.params.userId) {
            return <Navigate to={'/login'} />
        }
        return (
            <Profile {...this.props} profile={this.props.profile}
                        status={this.props.status} updateStatus={this.props.updateStatusThunk}/>
        )
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

export default compose(
    connect(mapStateToProps, {getProfileThunk, getStatusThunk, updateStatusThunk}),
    withRouter,
    // withNavigate
    // withAuthRedirect
)(ProfileContainer);


