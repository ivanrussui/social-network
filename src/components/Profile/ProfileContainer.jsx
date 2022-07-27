import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfileActionCreator} from "../../redux/profileReducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    // debugger;
    let profileId = this.props.router.params.userId;
    if (!profileId) {
      profileId = 2
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${profileId}`)
      .then(response => {
        // debugger;
        this.props.setUserProfileActionCreator(response.data);
      });
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
