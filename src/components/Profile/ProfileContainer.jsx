import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getProfileThunk,
    getStatusThunk,
    savePhotoThunk,
    saveProfileThunk,
    updateStatusThunk
} from "../../redux/profileReducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {compose} from "redux";
import {Navigate} from "react-router-dom";

class ProfileContainer extends React.Component {
    // эт для 80 урока
    // constructor(props) {
    //     super( props );
    //     this.state = {
    //         isShowMyProfile: true
    //     }
    // }

    refreshProfile() {
        let profileId = this.props.router.params.userId;
        let authorisedProfileId = this.props.authorizedProfileId;
        if (profileId) {
            this.props.getProfileThunk( profileId );
            this.props.getStatusThunk( profileId );
        } else {
            if (this.props.isAuth) {
                this.props.getProfileThunk( authorisedProfileId );
                this.props.getStatusThunk( authorisedProfileId );
            }
        }
    }

    componentDidMount() {
        this.refreshProfile();
        // эт для 80 урока
        // let profileId = this.props.router.params.userId;
        // let authorisedProfileId = this.props.authorizedProfileId;
        // if (profileId) {
        //     this.props.getProfileThunk( profileId );
        //     this.props.getStatusThunk( profileId );
        // } else {
        //     if (this.props.isAuth) {
        //         this.props.getProfileThunk( authorisedProfileId );
        //         this.props.getStatusThunk( authorisedProfileId );
        //     }
        // }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // debugger
        if (this.props.router.params.userId !== prevProps.router.params.userId) {
            this.refreshProfile();
        }
        // эт для 80 урока
        // let profileId = +this.props.router.params.userId;
        // let authorisedProfileId = this.props.authorizedProfileId;
        // let isShowMyProfile = this.state.isShowMyProfile;
        // if (isShowMyProfile) {
        //     if (profileId === authorisedProfileId) {
        //         this.setState( {isShowMyProfile: false} )
        //     }
        //     if (!profileId && this.props.isAuth) {
        //         this.props.getProfileThunk( authorisedProfileId );
        //         this.props.getStatusThunk( authorisedProfileId );
        //         this.setState( {isShowMyProfile: false} )
        //     }
        // }
    }

    render() {
        // console.log('Render Profile');
        if (!this.props.isAuth && !this.props.router.params.userId) {
            return <Navigate to={'/login'} />
        }
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     isOwner={!this.props.router.params.userId}
                     savePhoto={this.props.savePhotoThunk}
                     saveProfile={this.props.saveProfileThunk}
                     updateStatus={this.props.updateStatusThunk}/>
        )
    }
}

let mapStateToProps = (state) => {
    // console.log('mapStateToProps Profile');
    return ({
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedProfileId: state.auth.id,
        isAuth: state.auth.isAuth
    })
}

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
    connect(mapStateToProps, {
        getProfileThunk, getStatusThunk, updateStatusThunk, savePhotoThunk, saveProfileThunk
    }),
    withRouter,
    // withNavigate
    // withAuthRedirect
)(ProfileContainer);


