import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData, setHeaderUserProfile} from "../../redux/authReducer";
import {setUserProfileActionCreator} from "../../redux/profileReducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {authAPI, profileAPI} from "../../api/api";

class HeaderContainer extends React.Component {
  componentDidMount() {
    let profileId = this.props.router.params.userId;
    if (!profileId) {
      profileId = 2
    }
    // debugger

    authAPI.getAuthMe()
      .then(data => {
        // debugger
        if (data.resultCode === 0) {
          let {id, email, login} = data.data;
          this.props.setAuthUserData(id, email, login);
        }
      });

        profileAPI.getProfile(profileId)
          .then(data => this.props.setUserProfileActionCreator(data));
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
      <Component {...props} router={{ location, navigate, params }} />
    );
  }
  return ComponentWithRouterProp;
}


// export default connect(mapStateToProps, {setAuthUserData}) (HeaderContainer);
export default connect(mapStateToProps, {setAuthUserData, setUserProfileActionCreator})(withRouter(HeaderContainer));
