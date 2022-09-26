import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/authReducer";
import {setUserProfile, getProfile} from "../../redux/profileReducer";
import {getAuthMe} from "../../redux/authReducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";

class HeaderContainer extends React.Component {
  componentDidMount() {
    let profileId = this.props.router.params.userId;
    if (!profileId) {
      profileId = 2
    }

    // обращаемся к Thunk
    this.props.getAuthMe();

    // обращаемся к Thunk
    this.props.getProfile(profileId);
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


// export default connect(mapStateToProps, {setAuthUserData}) (HeaderContainer);
export default connect(mapStateToProps, {setAuthUserData, setUserProfile, getProfile, getAuthMe})(withRouter(HeaderContainer));
