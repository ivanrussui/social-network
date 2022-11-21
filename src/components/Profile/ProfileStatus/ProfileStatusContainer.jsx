import React from "react";
import {changeStatusText, getStatusThunk, updateStatusThunk} from "../../../redux/profileReducer";
import {connect} from "react-redux";
import ProfileStatus from "./ProfileStatus";
import {compose} from "redux";
import {useLocation, useNavigate, useParams} from "react-router-dom";
// import {getStatus, updateStatus} from "../../../redux/profileReducer";


class ProfileStatusContainer extends React.Component {
    componentDidMount() {
        let profileId = this.props.router.params.userId;
        if (!profileId) {
            // profileId = 25141 // мой id
            profileId = 2  //  Димыча
        }

        // обращаемся к Thunk
        this.props.getStatusThunk(profileId);
    }

    render() {
        return <ProfileStatus status={this.props.status} updateStatus={this.props.updateStatusThunk} />;
    }
}

let mapStateToProps = (state) => {
    return {
        status: state.profilePage.status
    }
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
    connect(mapStateToProps, {getStatusThunk, updateStatusThunk}),
    withRouter
)(ProfileStatusContainer);
