import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfileActionCreator} from "../../redux/profileReducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {profileAPI} from "../../api/api";

class ProfileContainer extends React.Component {
  componentDidMount() {
    // debugger;
    let profileId = this.props.router.params.userId;
    if (!profileId) {
      profileId = 2
    }

    // debugger
    profileAPI.getProfile(profileId)
      .then(data => this.props.setUserProfileActionCreator(data));
  }

  render() {
    // debugger;
    return  <Profile {...this.props} profile={this.props.profile} />
  }
}

let mapStateToProps = (state) => ({ // когда функ возвр объект мы должны ставить обычные скобки ( ) а потом фигурные { }
  profile: state.profilePage.profile
})

// wrapper to use react router's v6 hooks in class component(to use HOC pattern, like in router v5)
function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component {...props} router={{ location, navigate, params }} />
    );
  }
  return ComponentWithRouterProp;
}

export default connect(mapStateToProps, {setUserProfileActionCreator})(withRouter(ProfileContainer));


// todo это устарело в 6 роутере
// let WithUrlDataContainerComponent = withRouter(ProfileContainer);
// export default connect(mapStateToProps, {setUserProfileActionCreator})(WithUrlDataContainerComponent);
